import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import { Blog } from '@views/Blog';

export default function BlogPage() {
  const data = useStaticQuery(graphql`
    query BlogPage {
      posts: allMdx(sort: { fields: frontmatter___published, order: DESC }) {
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
            thumb: featuredImage {
              childImageSharp {
                gatsbyImageData(width: 40, height: 40, placeholder: BLURRED)
              }
            }
            hero: featuredImage {
              publicURL
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  `);

  return <Blog posts={data.posts.nodes} />;
}
