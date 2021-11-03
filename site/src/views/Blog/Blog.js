import React from 'react';

import { Card } from '@components/Card';
import { Filter } from '@components/Filter';
import { Hero } from '@components/Hero';
import { Layout } from '@views/Layout';

import * as S from './Blog.style';

export const Blog = ({ posts }) => {
  if (process.env.NODE_ENV === 'production') {
    return (
      <Layout>
        <Hero type="construction" />
      </Layout>
    );
  }

  return (
    <Layout>
      <Filter posts={posts}>
        {({ results }) => (
          <S.Posts>
            {results.map((post) => (
              <S.PostLink key={post.id} to={`/blog/${post.slug}`}>
                <Card post={post} />
              </S.PostLink>
            ))}
          </S.Posts>
        )}
      </Filter>
    </Layout>
  );
};
