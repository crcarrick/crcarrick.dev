import React from 'react';

import { Link } from '../Link/Link';

import * as S from './style';

export const BlogPostCard = ({ post }) => {
  return (
    <S.BlogPostCard>
      <Link to={`/blog/${post.slug}`}>{post.title}</Link> by {post.author.name}
    </S.BlogPostCard>
  );
};
