export async function getPost(slug) {
  if (slug != null) {
    const url = `/api/post?${new URLSearchParams({ slug })}`
    const res = await fetch(url)
    const data = await res.json()

    return data
  }
}

export async function clapPost(slug) {
  if (slug != null) {
    const url = '/api/clap'
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ slug }),
    })
    const data = await res.json()

    return data
  }
}
