import path from 'path'

import { type NextApiRequest, type NextApiResponse } from 'next'

import { getGHClient } from '~/lib/ghclient'
import { type ProjectAsset } from '~/types'

const MOCK_PROJECT_ASSETS: ProjectAsset[] = [
  {
    os: 'windows',
    name: 'reawr',
    downloadUrl: 'https://google.com',
  },
  {
    os: 'macos',
    name: 'reawr',
    downloadUrl: 'https://google.com',
  },
  {
    os: 'linux',
    name: 'reawr',
    downloadUrl: 'https://google.com',
  },
]

type JSONResponse = {
  readonly error?: string | Error
  readonly assets?: ProjectAsset[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<JSONResponse>
) {
  const EXTENSION_TO_OS: Record<string, string> = {
    '.exe': 'windows',
    '.dmg': 'macos',
    '.deb': 'linux',
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const repo = req.query['repo']

  if (repo == null || typeof repo !== 'string') {
    return res.status(400).json({ error: '`repo` is required' })
  }

  // Mock return value in development to avoid hitting api cap
  if (process.env.NODE_ENV === 'development') {
    return res.status(200).json({ assets: MOCK_PROJECT_ASSETS })
  }

  try {
    const client = await getGHClient()

    const { data: rateLimitInfo } = await client.rest.rateLimit.get()
    const remainingCalls = rateLimitInfo.resources.core.remaining

    console.log(`Remaining GH API requests: ${remainingCalls}`)

    if (remainingCalls === 0) {
      return res.status(429).json({ error: 'Too many requests' })
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

    return res.status(500).json({ error: 'Something went wrong' })
  }
}
