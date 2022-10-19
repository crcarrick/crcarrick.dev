import React from 'react'

import { Card } from '~/components/Card'
import { Filter } from '~/components/Filter'
import { Layout } from '~/views/Layout'

import * as S from './Blog.style'

export const Blog = ({ path, posts }) => (
  <Layout path={path} seoTitle="Blog">
    <Filter posts={posts}>
      {({ results }) => (
        <S.Posts>
          {results.map((post) => (
            <S.Link key={post.id} to={`/blog/${post.slug}`}>
              <Card post={post} />
            </S.Link>
          ))}
        </S.Posts>
      )}
    </Filter>
  </Layout>
)
