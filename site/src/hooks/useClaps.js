import React from 'react'

export const useClaps = (slug) => {
  const [post, setPost] = React.useState({})

  React.useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(`/api/post?slug=${slug}`)
      const post = await res.json()

      setPost(post)
    }

    if (slug != null) fetchPost()
  }, [slug])

  const clap = React.useCallback(() => {
    const clapPost = async () => {
      setPost((prevPost) => ({ ...prevPost, claps: prevPost.claps + 1 }))

      try {
        const res = await fetch('/api/clap', {
          method: 'POST',
          body: JSON.stringify({ slug }),
        })
        const post = await res.json()

        setPost(post)
      } catch {
        setPost((prevPost) => ({ ...prevPost, claps: prevPost.claps - 1 }))
      }
    }

    if (slug != null) clapPost()
  }, [slug])

  return { clap, claps: post.claps }
}
