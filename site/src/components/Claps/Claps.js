import React from 'react'

import { useMutation, useQuery, useQueryClient } from 'react-query'

import { clapPost, getPost } from '~/utils/api'

import * as S from './Claps.style'

const POSTS_KEY = 'posts'

export const Claps = React.forwardRef(function Claps({ slug }, ref) {
  const queryKey = [POSTS_KEY, slug]

  const [clicked, setClicked] = React.useState(false)

  const client = useQueryClient()
  const { data = {} } = useQuery([POSTS_KEY, slug], () => getPost(slug))
  const { mutate } = useMutation(() => clapPost(slug), {
    onMutate: async () => {
      await client.cancelQueries(queryKey)

      const previousPost = client.getQueryData(queryKey)

      client.setQueryData(queryKey, { ...previousPost, claps: previousPost.claps + 1 })

      return () => client.setQueryData(queryKey, previousPost)
    },
    onError: (_, __, ___, rollback) => rollback(),
    onSettled: () => client.invalidateQueries(queryKey),
  })

  const handleClick = React.useCallback(() => {
    mutate()
    setClicked(true)
  }, [mutate])

  return (
    <S.ClapButton clicked={clicked} ref={ref} onClick={handleClick}>
      {data.claps != null ? data.claps.toLocaleString() : null}
    </S.ClapButton>
  )
})
