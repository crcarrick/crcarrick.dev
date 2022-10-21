export async function getPost(slug) {
  if (slug != null) {
    const url = `/api/post?${new URLSearchParams({ slug })}`
    const res = await fetch(url)
    const data = await res.json()

    return data
  }

  throw new Error('Argument `slug` is required')
}

export async function clapPost({ slug, mutationId }) {
  if (slug != null && mutationId != null) {
    const url = '/api/clap'
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ slug, mutationId }),
    })
    const data = await res.json()

    return data
  }

  let missing = []

  if (slug == null) missing.push('`slug`')
  if (mutationId == null) missing.push('`mutationId`')

  throw new Error(`Argument(s) ${missing.join(' ')} are required`)
}

export async function getProjectReleaseDetails({ project }) {
  if (project != null) {
    const url = `/api/project?${new URLSearchParams({ repo: project.frontmatter.repo })}`
    const res = await fetch(url)
    const data = await res.json()

    return data
  }

  throw new Error('Argument `project` is required')
}
