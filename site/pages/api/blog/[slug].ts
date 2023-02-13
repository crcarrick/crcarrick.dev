import { type NextApiRequest, type NextApiResponse } from 'next'

import { getPostBySlug } from '~/lib/blog'

function slugIsValid(slug: unknown): slug is string {
  return typeof slug === 'string'
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const slug = req.query['slug']

    if (slugIsValid(slug)) {
      const post = await getPostBySlug(slug)

      return res.status(200).json({ post })
    }

    return res.status(400).send('Bad request')
  } catch (err) {
    return res.status(500).send('Something went wrong')
  }
}
