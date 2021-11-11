import React from 'react';

import { DevIcon } from '@components/DevIcon';

import * as S from './InlineCard.style';

export const InlineCard = ({ post }) => {
  return (
    <S.Card>
      <S.Row>
        <S.IconWrapper>
          <DevIcon icon={post.frontmatter.featuredIcon} />
        </S.IconWrapper>
        <S.Title>{post.frontmatter.title}</S.Title>
      </S.Row>
      <S.Row tags>
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
