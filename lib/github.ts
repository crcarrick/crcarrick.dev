import { Octokit } from '@octokit/rest'

const octokit = new Octokit({
  auth: process.env.GITHUB_AUTH_TOKEN,
})

const OS_MAP: Record<string, string> = {
  '.deb': 'linux',
  '.dmg': 'macos',
  '.exe': 'windows',
}

export interface ReleaseAsset {
  downloadUrl: string
  name: string
  os: string
}

export async function getProjectReleaseDetails(
  repo: string,
): Promise<ReleaseAsset[]> {
  const { data } = await octokit.repos.getLatestRelease({
    owner: 'crcarrick',
    repo,
  })

  return data.assets
    .map((asset) => {
      const ext = Object.keys(OS_MAP).find((e) => asset.name.endsWith(e))
      if (!ext) return null

      return {
        downloadUrl: asset.browser_download_url,
        name: asset.name,
        os: OS_MAP[ext]!,
      }
    })
    .filter((asset): asset is ReleaseAsset => asset !== null)
}
