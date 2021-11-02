import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

import { breakpoint } from '@utils/mixins';

export const Article = styled.article`
  ${breakpoint.md} {
    background-color: var(--bg-card);
    padding: 2rem;
  }
`;

export const Image = styled(GatsbyImage)`
  div:first-child[style] {
    padding-top: 56.25% !important;
  }
`;

export const Title = styled.h1`
  margin-top: 4rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  font-size: 3rem;
`;

export const Author = styled.h4`
  margin-top: 0.5rem;
`;
