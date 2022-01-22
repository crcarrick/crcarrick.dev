import React from 'react'

import { clapPost, getPost } from '~/utils/api'

import * as S from './Claps.style'

export const Claps = React.forwardRef(function Claps({ slug }, ref) {
  const [data, setData] = React.useState({
    claps: null,
    mutationId: null,
  })
  const [clicked, setClicked] = React.useState(false)

  const safeSetData = React.useCallback(
    (data) =>
      setData((prev) => {
        if (typeof data === 'function') data = data(prev)

        return data.mutationId > prev.mutationId ? data : prev
      }),
    []
  )

  React.useEffect(() => {
    const getClaps = async () => {
      try {
        const { claps } = await getPost(slug)

        safeSetData({ claps, mutationId: Date.now() })
      } catch (err) {
        console.error(err.message)
      }
    }

    getClaps()
  }, [safeSetData, slug])

  const handleClick = async () => {
    const clap = async () => {
      try {
        const mutationId = Date.now()

        setClicked(true)
        safeSetData((prev) => ({ claps: prev.claps + 1, mutationId }))

        const resp = await clapPost({ slug, mutationId })

        safeSetData(resp)
      } catch (err) {
        console.error(err.message)

        safeSetData((prev) => ({ claps: prev.claps - 1, mutationId: Date.now() }))
      }
    }

    clap()
  }

  return (
    <S.ClapButton clicked={clicked} ref={ref} onClick={handleClick}>
      {data.claps != null ? data.claps.toLocaleString() : '?'}
    </S.ClapButton>
  )
})
