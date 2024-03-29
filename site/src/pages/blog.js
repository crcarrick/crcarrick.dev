import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'

import { Blog } from '~/views/Blog'

export default function BlogPage({ location }) {
  const data = useStaticQuery(graphql`
    query BlogPage {
      posts: allMdx(
        filter: {
          fileAbsolutePath: { glob: "/**/blog/**" }
          frontmatter: { published: { ne: "1970-01-01T00:00:00.000Z" } }
        }
        sort: { fields: frontmatter___published, order: DESC }
      ) {
        nodes {
          id
          slug
          body
          wordCount {
            words
          }
          excerpt
          timeToRead
          frontmatter {
            title
            author
            description
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
    }
  `)

  return <Blog path={location.pathname} posts={data.posts.nodes} />
}
