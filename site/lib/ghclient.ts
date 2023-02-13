import { Octokit } from '@octokit/rest'

export async function getGHClient() {
  return new Octokit({ auth: process.env.GITHUB_AUTH_TOKEN })
}
