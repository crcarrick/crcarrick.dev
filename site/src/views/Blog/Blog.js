import React from 'react';

import { Filter } from '@components/Filter';
import { Hero } from '@components/Hero';
import { Layout } from '@views/Layout';
import { Card } from '@components/Card';

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
    <Layout seoTitle="Blog">
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
  );
};
