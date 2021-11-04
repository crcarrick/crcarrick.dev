import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import { rhythm } from '@utils/typography';

const spacing = rhythm(1 / 2);

export const Card = styled.div`
  flex: 1;
  flex-direction: column;
  height: 100%;
  background-color: var(--bg-card);
  color: var(--color-text);
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: ${spacing};
`;

export const Title = styled.h3`
  text-transform: uppercase;
  margin-bottom: ${spacing};
`;

export const ImageWrapper = styled.div`
  min-height: 1px;
`;

export const Image = styled(GatsbyImage)`
  div:first-child[style] {
    padding-top: 56.25% !important;
  }
`;

export const Date = styled.h6`
  color: var(--color-text);
  margin-bottom: ${spacing};
`;

export const Description = styled.p`
  margin-bottom: ${spacing};
`;

export const Tags = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`;
