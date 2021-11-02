import React from 'react';

import { format } from 'date-fns';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Layout } from '@components/Layout';

import * as S from '@style/templates/post.style';

export default function BlogPostTemplate({ data }) {
  return (
    <Layout>
      <S.Article>
        <S.Image
          image={getImage(data.post.frontmatter.featuredImage)}
          alt={data.post.frontmatter.description}
        />
        <S.Title>{data.post.frontmatter.title}</S.Title>
        <S.Author>
          by {data.post.frontmatter.author} on
          <span> {format(new Date(data.post.frontmatter.published), 'MMM dd yyyy')}</span>
        </S.Author>
        <MDXRenderer>{data.post.body}</MDXRenderer>
      </S.Article>
    </Layout>
  );
}

export const query = graphql`
  query BlogPost($id: String) {
    post: mdx(id: { eq: $id }) {
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
`;
