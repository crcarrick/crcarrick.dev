import React from 'react';

import { getImage } from 'gatsby-plugin-image';

import { Tag as TagComponent } from '@components/Tag';
import { useSize } from '@hooks/useSize';

import * as S from './Card.style';

// This was a fun exercise but I think it's just convoluted compared to just
// having 2 card components.  I'm not sure I gain anything this way except
// potential confusion and 1 less set of JS files
export const Card = ({ post }) => {
  const size = useSize();

  const Tag = size ? TagComponent : S.Tag;
  const Title = size ? S.TitleH3 : S.TitleH4;
  const image = size ? post.frontmatter.hero : post.frontmatter.thumb;

  return (
    <S.Card>
      <S.Row>
        <S.ImageWrapper>
          <S.Image image={getImage(image)} alt={post.frontmatter.description} />
        </S.ImageWrapper>
        <Title>{post.frontmatter.title}</Title>
      </S.Row>
      <S.RowWrapper>
        <S.Row>
          <S.Tags>
            {post.frontmatter.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </S.Tags>
        </S.Row>
        <S.Row>
          <S.Meta>
            Published on {post.frontmatter.published}
            <S.Separator />
            <S.ReadingTime>{post.timeToRead}</S.ReadingTime>
          </S.Meta>
          <S.Excerpt>{post.excerpt}</S.Excerpt>
        </S.Row>
      </S.RowWrapper>
    </S.Card>
  );
};
