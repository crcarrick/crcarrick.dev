import React from 'react';

import { getImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Layout } from '@views/Layout';

import * as S from './Post.style';

export const Post = ({ post }) => {
  return (
    <Layout>
      <S.Article>
        <S.Image
          image={getImage(post.frontmatter.featuredImage)}
          alt={post.frontmatter.description}
        />
        <S.Title>{post.frontmatter.title}</S.Title>
        <S.Author>
          published by {post.frontmatter.author} {post.frontmatter.published}
        </S.Author>
        <MDXRenderer>{post.body}</MDXRenderer>
      </S.Article>
    </Layout>
  );
};
