import React from 'react';

import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import { Card } from '@components';
import { Layout } from '@layout';

import ConstructionSVG from '@assets/svg/hero/construction.svg';

import * as S from '@style/pages/blog.style';

const ConstructionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Hero = styled(ConstructionSVG)`
  max-width: 100%;
  height: auto;
`;

export default function BlogPage() {
  const data = useStaticQuery(graphql`
    query BlogPage {
      posts: allMdx {
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

  if (process.env.NODE_ENV === 'production') {
    return (
      <Layout>
        <ConstructionWrapper>
          <Hero />
        </ConstructionWrapper>
      </Layout>
    );
  }

  return (
    <Layout>
      <S.Posts>
        {posts.map((post) => (
          <S.PostLink key={post.id} to={`/blog/${post.slug}`}>
            <Card post={post} />
          </S.PostLink>
        ))}
      </S.Posts>
    </Layout>
  );
}
