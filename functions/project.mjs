import { getGHClient } from './utils/ghclient.mjs'

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
      .filter(
        ({ browser_download_url }) =>
          browser_download_url.endsWith('.exe') ||
          browser_download_url.endsWith('.dmg') ||
          browser_download_url.endsWith('.deb')
      )
      .map(({ name, browser_download_url }) => ({
        os: browser_download_url.endsWith('.exe')
          ? 'windows'
          : browser_download_url.endsWith('.dmg')
          ? 'macos'
          : 'linux',
        name: name,
        downloadUrl: browser_download_url,
      }))

    return { statusCode: 200, body: JSON.stringify({ assets }) }
  } catch (err) {
    return { statusCode: 500 }
  }
}
