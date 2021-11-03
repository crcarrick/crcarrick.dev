import React from 'react';

import { getImage } from 'gatsby-plugin-image';

import { Tag } from '@components/Tag';

import * as S from './Card.style';

export const Card = ({ post }) => (
  <S.Card>
    <S.ImageWrapper>
      <S.Image
        image={getImage(post.frontmatter.featuredImage)}
        alt={post.frontmatter.description}
      />
    </S.ImageWrapper>
    <S.Info>
      <S.Title>{post.frontmatter.title}</S.Title>
      <S.Date>{post.frontmatter.published}</S.Date>
      <S.Description>{post.excerpt}</S.Description>
      <S.Tags>
        {post.frontmatter.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </S.Tags>
    </S.Info>
  </S.Card>
);
