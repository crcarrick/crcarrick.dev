import React from 'react';

import { getImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Layout } from '@views/Layout';

import * as S from './Post.style';

// TODO: Need to extract this "Post Metadata" thing out into it's own component.
//       It's used in several places now in the exact same manner (published at date * emoji * reading time)
export const Post = ({ post }) => {
  return (
    <Layout post={post}>
      <S.Article>
        <S.Title>{post.frontmatter.title}</S.Title>
        <S.Meta>
          {post.frontmatter.published}
          <S.ReadingTime>{post.timeToRead}</S.ReadingTime>
        </S.Meta>
        {/* <S.Description>{post.frontmatter.description}</S.Description> */}
        <S.Image
          image={getImage(post.frontmatter.featuredImage)}
          alt={post.frontmatter.description}
        />
        <MDXRenderer>{post.body}</MDXRenderer>
      </S.Article>
    </Layout>
  );
};
