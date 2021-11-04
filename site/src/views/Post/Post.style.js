import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import { Heading } from '@components/Heading/Heading';
import { breakpoint } from '@utils/mixins';

export const Article = styled.article`
  ${breakpoint.md} {
    background-color: var(--bg-card);
    padding: var(--space-xl);
  }

  ul,
  ol {
    list-style: initial;
  }

  *:last-child {
    margin-bottom: 0;
  }
`;

export const Image = styled(GatsbyImage)`
  div:first-child[style] {
    padding-top: 56.25% !important;
  }
`;

export const Title = styled(Heading.H1)`
  text-transform: uppercase;
  margin: var(--space-xl) 0 var(--space-md) 0;
`;

export const Author = styled(Heading.H6)`
  &:before {
    content: '- ';
  }
`;
