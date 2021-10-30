import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import { PostCard } from '@components';
import { Layout } from '@layout';

import * as S from '@style/pages/blog.style';

export default function BlogPage() {
  const data = useStaticQuery(graphql`
    query BlogPage {
      posts: allMdx {
        nodes {
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
            published
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

  const posts = data.posts.nodes;

  return (
    <Layout>
      <S.Posts>
        {posts.map((post, key) => (
          <S.Link key={key} to={`/blog/${post.slug}`}>
            <S.Post>
              <PostCard post={post} />
            </S.Post>
          </S.Link>
        ))}
      </S.Posts>
    </Layout>
  );
}
