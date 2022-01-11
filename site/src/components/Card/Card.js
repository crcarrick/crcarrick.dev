import React from 'react';

import { getImage } from 'gatsby-plugin-image';

import { Icon } from '@components/Icon';
import { Tag as TagComponent } from '@components/Tag';
import { useSize } from '@hooks/useSize';

import * as S from './Card.style';

export const Card = ({ post }) => {
  const size = useSize();

  let Tag = S.Tag;
  let Title = S.TitleH4;
  let Image = <Icon.Post tags={post.frontmatter.tags} />;

  if (size) {
    Tag = TagComponent;
    Title = S.TitleH3;
    Image = (
      <S.Image
        image={getImage(post.frontmatter.featuredImage)}
        alt={post.frontmatter.description}
      />
    );
  }

  return (
    <S.Card>
      <S.Row>
        <S.ImageWrapper>{Image}</S.ImageWrapper>
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
