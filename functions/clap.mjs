import { gql } from 'graphql-request'

import { client } from './utils/client.mjs'

export async function handler(event) {
  if (event.httpMethod !== 'POST') return { statusCode: 404 }

  let body
  try {
    body = JSON.parse(event.body)
  } catch (err) {
    console.error(err.message)

    return { statusCode: 400 }
  }

  const { mutationId, slug } = body

  if (slug == null || mutationId == null) {
    return { statusCode: 400 }
  }

  try {
    const response = await client.request(
      gql`
        mutation ClapPostBySlug($slug: String!) {
          clapPostBySlug(slug: $slug) {
            claps
          }
        }
      `,
      { slug }
    )

    return {
      statusCode: 200,
      body: JSON.stringify({ ...response.clapPostBySlug, mutationId }),
    }
  } catch (err) {
    console.error(err.message)

    return {
      statusCode: 500,
    }
  }
}
