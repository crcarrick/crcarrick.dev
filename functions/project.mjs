import path from 'path'

import { getGHClient } from './utils/ghclient.mjs'

const EXTENSION_TO_OS = {
  '.exe': 'windows',
  '.dmg': 'macos',
  '.deb': 'linux',
}

export async function handler(event) {
  if (event.httpMethod !== 'GET') return { statusCode: 405 }

  const repo = event.queryStringParameters['repo']

  if (repo == null) return { statusCode: 400 }

  try {
    const client = await getGHClient()

    const { data: rateLimitInfo } = await client.rest.rateLimit.get()
    const remainingCalls = rateLimitInfo.resources.core.remaining

    console.log(`Remaining GH API requests: ${remainingCalls}`)

    if (remainingCalls === 0) return { statusCode: 429 }

    const { data } = await client.rest.repos.getLatestRelease({
      owner: 'crcarrick',
      repo,
    })

    const assets = data.assets
      .map((asset) => ({
        ...asset,
        parsed_path: path.parse(asset.browser_download_url),
      }))
      .filter(({ parsed_path }) => Object.keys(EXTENSION_TO_OS).includes(parsed_path.ext))
      .map(({ name, browser_download_url, parsed_path }) => ({
        os: EXTENSION_TO_OS[parsed_path.ext],
        name: name,
        downloadUrl: browser_download_url,
      }))

    return { statusCode: 200, body: JSON.stringify({ assets }) }
  } catch (err) {
    return { statusCode: 500 }
  }
}
