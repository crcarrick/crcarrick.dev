import path from 'path'

import { type NextApiRequest, type NextApiResponse } from 'next'

import { getGHClient } from '~/lib/ghclient'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const EXTENSION_TO_OS: Record<string, string> = {
    '.exe': 'windows',
    '.dmg': 'macos',
    '.deb': 'linux',
  }

  if (req.method !== 'GET') {
    return res.status(405).send('Method not allowed')
  }

  const repo = req.query['repo']

  if (repo == null || typeof repo !== 'string') {
    return res.status(400).send('`repo` is required')
  }

  try {
    const client = await getGHClient()

    const { data: rateLimitInfo } = await client.rest.rateLimit.get()
    const remainingCalls = rateLimitInfo.resources.core.remaining

    console.log(`Remaining GH API requests: ${remainingCalls}`)

    if (remainingCalls === 0) {
      return res.status(429).send('Too many requests')
    }

    const { data } = await client.rest.repos.getLatestRelease({
      owner: 'crcarrick',
      repo,
    })

    const assets = data.assets
      .map((asset) => ({
        ...asset,
        parsed_path: path.parse(asset.browser_download_url),
      }))
      .filter(({ parsed_path }) =>
        Object.keys(EXTENSION_TO_OS).includes(parsed_path.ext)
      )
      .map(({ name, browser_download_url, parsed_path }) => ({
        os: EXTENSION_TO_OS[parsed_path.ext],
        name: name,
        downloadUrl: browser_download_url,
      }))

    return res.status(200).json({ assets })
  } catch (err) {
    console.error(err)

    return res.status(500).send('Something went wrong')
  }
}
