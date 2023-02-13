import { gql } from 'graphql-request'
import { type NextApiRequest, type NextApiResponse } from 'next'

import { gqlClient } from '~/lib/gqlclient'

type GetGQLResponse = {
  readonly findPostBySlug: {
    readonly claps: number
  }
}

type PostGQLResponse = {
  readonly clapPostBySlug: {
    readonly claps: number
  }
}

type JSONResponse = {
  readonly error?: string | Error
  readonly claps?: number
  readonly mutationId?: number
}

async function handleGet(
  req: NextApiRequest,
  res: NextApiResponse<JSONResponse>
) {
  const slug = req.query['slug']

  if (slug == null || typeof slug !== 'string') {
    return res.status(400).json({ error: '`slug` is required' })
  }

  try {
    const response = await gqlClient.request<GetGQLResponse>(
      gql`
        query FindPostBySlug($slug: String!) {
          findPostBySlug(slug: $slug) {
            claps
          }
        }
      `,
      { slug }
    )

    return res.status(200).json({ claps: response.findPostBySlug.claps })
  } catch (err) {
    console.error(err)

    return res.status(500).json({ error: 'Something went wrong' })
  }
}

async function handlePost(
  req: NextApiRequest,
  res: NextApiResponse<JSONResponse>
) {
  const { slug, mutationId } = req.body

  if (slug == null || mutationId == null) {
    return res.status(400).json({ error: 'Bad request' })
  }

  try {
    const response = await gqlClient.request<PostGQLResponse>(
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
      claps: response.clapPostBySlug.claps,
      mutationId,
    })
  } catch (err) {
    console.error(err)

    return res.status(500).json({ error: 'Something went wrong' })
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<JSONResponse>
) {
  if (req.method === 'GET') return handleGet(req, res)
  if (req.method === 'POST') return handlePost(req, res)

  return res.status(405).json({ error: 'Method not allowed' })
}
