import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import { BlogPostCard } from '@components';
import { Layout } from '@layout';

export default function BlogPage() {
  const data = useStaticQuery(graphql`
    query BlogPage {
      posts: allContentfulBlogPost {
        nodes {
          author {
            name
          }
          body {
            childMdx {
              body
              excerpt
              timeToRead
            }
          }
          fromNowDate: publishDate(fromNow: true)
          rawDate: publishDate
          title
          tags
          slug
          heroImage {
            gatsbyImageData(width: 200, placeholder: BLURRED)
          }
          description {
            description
          }
        }
      }
    }
  `);

  const posts = data.posts.nodes;

  return (
    <Layout>
      <ul>
        {posts.map((post, key) => (
          <li key={key}>
            <BlogPostCard post={post} />
          </li>
        ))}
      </ul>
    </Layout>
  );
}
