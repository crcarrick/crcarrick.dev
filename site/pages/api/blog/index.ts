import { type NextApiRequest, type NextApiResponse } from 'next'

import { getPosts } from '~/lib/blog'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const posts = await getPosts()

    return res.status(200).json({ posts })
  } catch (err) {
    return res.status(500).send('Something went wrong')
  }
}
