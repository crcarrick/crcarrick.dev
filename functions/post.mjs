import { gql } from 'graphql-request'

import { gqlClient } from './utils/gqlclient.mjs'

export async function handler(event) {
  if (event.httpMethod !== 'GET') return { statusCode: 405 }

  const slug = event.queryStringParameters['slug']

  if (slug == null) return { statusCode: 400 }

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

    return {
      statusCode: 200,
      body: JSON.stringify(response.findPostBySlug),
    }
  } catch {
    return { statusCode: 500 }
  }
}
