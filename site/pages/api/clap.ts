import { gql } from 'graphql-request'
import { type NextApiRequest, type NextApiResponse } from 'next'

import { gqlClient } from '~/lib/gqlclient'

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(404).send('Not found')
  }

  const { slug, mutationId } = req.body

  if (slug == null || mutationId == null) {
    return res.status(400).send('Bad request')
  }

  try {
    const response = await gqlClient.request(
      gql`
        mutation ClapPostBySlug($slug: String!) {
          clapPostBySlug(slug: $slug) {
            claps
          }
        }
      `,
      { slug }
    )

    return res.status(200).json({
      ...response.clapPostBySlug,
      mutationId,
    })
  } catch (err) {
    console.error(err)

    return res.status(500).send('Something went wrong')
  }
}
