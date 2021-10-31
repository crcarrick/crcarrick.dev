import React from 'react';

import { format } from 'date-fns';
import { getImage } from 'gatsby-plugin-image';

import { Tag } from '../Tag/Tag';

import * as S from './style';

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
      <S.Date>{format(new Date(post.frontmatter.published), 'MMM dd yyyy')}</S.Date>
      <S.Description>{post.excerpt}</S.Description>
    </S.Info>
    <S.Tags>
      {post.frontmatter.tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </S.Tags>
  </S.Card>
);
