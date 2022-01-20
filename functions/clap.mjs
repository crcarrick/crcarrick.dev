import { gql } from 'graphql-request'

import { client } from './utils/client.mjs'

export async function handler(event) {
  if (event.httpMethod !== 'POST') return { statusCode: 404 }

  let slug
  try {
    slug = JSON.parse(event.body)['slug']
  } catch (err) {
    console.error(err.message)
  }

  if (slug == null) return { statusCode: 400 }

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
      body: JSON.stringify(response.clapPostBySlug),
    }
  } catch (err) {
    return {
      statusCode: 500,
    }
  }
}
