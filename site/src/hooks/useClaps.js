import { useMutation, useQuery, useQueryClient } from 'react-query'

import { clapPost, getPost } from '~/utils/api'

const POSTS_KEY = 'posts'

const usePost = (slug) => useQuery([POSTS_KEY, slug], () => getPost(slug))

const useClap = (slug) => {
  const client = useQueryClient()
  const queryKey = [POSTS_KEY, slug]

  return useMutation(() => clapPost(slug), {
    onMutate: async () => {
      await client.cancelQueries(queryKey)

      const previousPost = client.getQueryData(queryKey)

      client.setQueryData(queryKey, { ...previousPost, claps: previousPost.claps + 1 })

      return () => client.setQueryData(queryKey, previousPost)
    },
    onError: (_, __, ___, rollback) => rollback(),
    onSettled: () => client.invalidateQueries(queryKey),
  })
}

export const useClaps = (slug) => {
  const { data = { claps: 0 } } = usePost(slug)
  const { mutate: clap } = useClap(slug)

  return { clap, claps: data.claps }
}
