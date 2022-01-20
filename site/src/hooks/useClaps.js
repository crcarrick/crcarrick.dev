import React from 'react'

export const useClaps = (slug) => {
  const [clapsData, _setClapsData] = React.useState({
    claps: null,
    mutationId: null,
  })

  // TODO: quick pass at avoiding "clobbering" the optimistic value with stale data
  //       might be some edge cases to think about here
  const setClapsData = React.useCallback(
    (data) =>
      _setClapsData((prevData) => {
        if (typeof data === 'function') data = data(prevData)

        return data.mutationId > prevData.mutationId ? data : prevData
      }),
    []
  )

  React.useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(`/api/post?slug=${slug}`)
      const data = await res.json()

      setClapsData({ ...data, mutationId: Date.now() })
    }

    if (slug != null) fetchPost()
  }, [setClapsData, slug])

  const clap = React.useCallback(() => {
    const clapPost = async () => {
      const mutationId = Date.now()

      setClapsData(({ claps }) => ({ claps: claps + 1, mutationId }))

      try {
        const res = await fetch('/api/clap', {
          method: 'POST',
          body: JSON.stringify({ mutationId, slug }),
        })
        const data = await res.json()

        setClapsData(data)
      } catch {
        setClapsData(({ claps }) => ({ claps: claps - 1, mutationId: Date.now() }))
      }
    }

    if (slug != null) clapPost()
  }, [setClapsData, slug])

  return { clap, claps: clapsData.claps }
}
