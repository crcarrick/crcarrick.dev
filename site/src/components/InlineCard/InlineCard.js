import React from 'react';

import { getImage } from 'gatsby-plugin-image';

import * as S from './InlineCard.style';

export const InlineCard = ({ post }) => {
  return (
    <S.Card>
      <S.Row>
        <S.ImageWrapper>
          <S.Image image={getImage(post.frontmatter.thumb)} alt={post.frontmatter.description} />
        </S.ImageWrapper>
        <S.Title>{post.frontmatter.title}</S.Title>
      </S.Row>
      <S.Row style={{ paddingTop: 0, paddingBottom: 0 }}>
        <S.Tags>
          {post.frontmatter.tags.map((tag) => (
            <S.Tag key={tag}>{tag}</S.Tag>
          ))}
        </S.Tags>
      </S.Row>
      <S.Row>
        <S.Meta>
          Published on {post.frontmatter.published} <S.Separator />
          <S.ReadingTime>{post.timeToRead}</S.ReadingTime>
        </S.Meta>
      </S.Row>
    </S.Card>
  );
};
