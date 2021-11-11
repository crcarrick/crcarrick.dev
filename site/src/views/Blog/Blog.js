import React from 'react';

import { Filter } from '@components/Filter';
import { Hero } from '@components/Hero';
import { Layout } from '@views/Layout';
// import { Card } from '@components/ComboCard';
import { Card } from '@components/Card';
import { InlineCard } from '@components/InlineCard';
import { useSize } from '@hooks/useSize';

import * as S from './Blog.style';

export const Blog = ({ posts }) => {
  const size = useSize();

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
              <S.Link key={post.id} to={`/blog/${post.slug}`}>
                {size ? <Card post={post} /> : <InlineCard post={post} />}
              </S.Link>
            ))}
          </S.Posts>
        )}
      </Filter>
    </Layout>
  );
};
