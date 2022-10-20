import React from 'react'

import loadable from '@loadable/component'
import { getImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { Bio } from '~/components/Bio'
import { useLazyRender } from '~/hooks/useLazyRender'
import { Layout } from '~/views/Layout'

import * as S from './Post.style'

const Claps = loadable(() => import('~/components/Claps'), {
  resolveComponent: (components) => components.Claps,
})

export const Post = ({ path, post }) => {
  const { ref, shouldRender } = useLazyRender({ rootMargin: '400px 0px' })

  return (
    <Layout content={post} path={path}>
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
        <S.ClapsWrapper ref={ref}>
          {shouldRender ? <Claps slug={post.slug} /> : null}
        </S.ClapsWrapper>
      </S.Article>
      <Bio />
    </Layout>
  )
}
