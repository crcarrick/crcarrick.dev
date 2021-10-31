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
