import React from 'react'

import { graphql } from 'gatsby'

import { Post } from '~/views/Post'

export default function PostTemplate({ path, data }) {
  return <Post path={path} post={data.post} />
}

export const query = graphql`
  query PostTemplate($id: String) {
    post: mdx(id: { eq: $id }) {
      body
      slug
      excerpt
      timeToRead
      wordCount {
        words
      }
      frontmatter {
        title
        description
        author
        published(formatString: "MMMM DD, yyyy")
        fromNow: published(fromNow: true)
        tags
        featuredIcon
        featuredImage {
          publicURL
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
      }
    }
  }
`
