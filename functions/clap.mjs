import { gql } from 'graphql-request'

import { client } from './utils/client.mjs'

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 404 }
  }

  let slug
  try {
    slug = JSON.parse(event.body)['slug']
  } catch {
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
      body: JSON.stringify(response),
    }
  } catch (err) {
    return {
      statusCode: 500,
    }
  }
}
