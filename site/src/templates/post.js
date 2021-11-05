import React from 'react';

import { graphql } from 'gatsby';

import { Post } from '@views/Post';

export default function PostTemplate({ data }) {
  return <Post post={data.post} />;
}

export const query = graphql`
  query PostTemplate($id: String) {
    post: mdx(id: { eq: $id }) {
      body
      wordCount {
        words
      }
      excerpt
      timeToRead
      frontmatter {
        title
        description
        author
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
`;
