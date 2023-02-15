import { type NextApiRequest, type NextApiResponse } from 'next'

import { getPosts } from '~/lib/blog'
import { type Post } from '~/types'

type JSONResponse = {
  readonly error?: string | Error
  readonly posts?: Post[]
}

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<JSONResponse>
) {
  try {
    const posts = await getPosts()

    return res.status(200).json({ posts })
  } catch (err) {
    return res.status(500).json({ error: 'Something went wrong' })
  }
}
