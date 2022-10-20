import { gql } from 'graphql-request'

import { client } from './utils/client.mjs'

export async function handler(event) {
  if (event.httpMethod !== 'GET') return { statusCode: 405 }

  const slug = event.queryStringParameters['slug']

  if (slug == null) return { statusCode: 400 }

  try {
    const response = await client.request(
      gql`
        query FindPostBySlug($slug: String!) {
          findPostBySlug(slug: $slug) {
            claps
          }
        }
      `,
      { slug }
    )

    return {
      statusCode: 200,
      body: JSON.stringify(response.findPostBySlug),
    }
  } catch {
    return { statusCode: 500 }
  }
}
