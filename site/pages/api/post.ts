import { gql } from 'graphql-request'
import { type NextApiRequest, type NextApiResponse } from 'next'

import { gqlClient } from '~/lib/gqlclient'

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).send('Method not allowed')
  }

  const slug = req.query['slug']

  if (slug == null || typeof slug !== 'string') {
    return res.status(400).send('`slug` is required')
  }

  try {
    const response = await gqlClient.request(
      gql`
        query FindPostBySlug($slug: String!) {
          findPostBySlug(slug: $slug) {
            claps
          }
        }
      `,
      { slug }
    )

    return res.status(200).json(response.findPostBySlug)
  } catch (err) {
    console.error(err)

    return res.status(500).send('Something went wrong')
  }
}
