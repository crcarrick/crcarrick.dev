import { type NextApiRequest, type NextApiResponse } from 'next'

import { getPostBySlug } from '~/lib/blog'
import { type Post } from '~/types'

type JSONResponse = {
  readonly error?: string | Error
  readonly post?: Post | null
}

function slugIsValid(slug: unknown): slug is string {
  return typeof slug === 'string'
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<JSONResponse>
) {
  try {
    const slug = req.query['slug']

    if (slugIsValid(slug)) {
      const post = await getPostBySlug(slug)

      return res.status(200).json({ post })
    }

    return res.status(400).json({ error: '`slug` is required' })
  } catch (err) {
    return res.status(500).json({ error: 'Something went wrong' })
  }
}
