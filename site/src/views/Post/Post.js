import React from 'react'

import { getImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { useClaps } from '~/hooks/useClaps'
import { Layout } from '~/views/Layout'

import * as S from './Post.style'

export const Post = ({ path, post }) => {
  const { clap, claps } = useClaps(post.slug)

  return (
    <Layout path={path} post={post}>
      <S.Article>
        <S.Title>{post.frontmatter.title}</S.Title>
        <S.Meta>
          {post.frontmatter.published}
          <S.ReadingTime>{post.timeToRead}</S.ReadingTime>
        </S.Meta>
        <S.Image
          loading="eager"
          image={getImage(post.frontmatter.featuredImage)}
          alt={post.frontmatter.description}
        />
        <MDXRenderer>{post.body}</MDXRenderer>
        {claps != null ? <S.Clap onClick={clap}>{claps.toLocaleString()}</S.Clap> : null}
      </S.Article>
    </Layout>
  )
}
