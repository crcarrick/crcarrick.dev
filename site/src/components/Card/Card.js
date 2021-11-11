import React from 'react';

import { getImage } from 'gatsby-plugin-image';

import { Tag } from '@components/Tag';

import * as S from './Card.style';

export const Card = ({ post }) => (
  <S.Card>
    <S.Row>
      <S.ImageWrapper>
        <S.Image
          image={getImage(post.frontmatter.featuredImage)}
          alt={post.frontmatter.description}
        />
      </S.ImageWrapper>
      <S.Title>{post.frontmatter.title}</S.Title>
    </S.Row>
    <S.Row>
      <S.Meta>
        Published on {post.frontmatter.published}{' '}
        <span style={{ marginLeft: 'var(--space-sm)' }}>•</span>
        <S.ReadingTime>{post.timeToRead}</S.ReadingTime>
      </S.Meta>
      <S.Excerpt>{post.excerpt}</S.Excerpt>
    </S.Row>
    <S.Row>
      <S.Tags>
        {post.frontmatter.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </S.Tags>
    </S.Row>
  </S.Card>
);
