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
          frontmatter {
            title
            author
            description
            published(fromNow: true)
            tags
            featuredImage {
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
