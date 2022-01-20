import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

import { breakpoint } from '~/utils/mixins'

export const Article = styled.article`
  display: flex;
  flex: 1;
  flex-direction: column;

  ${breakpoint.md} {
    background-color: var(--bg-card);
    padding: var(--space-xl);
  }

  > h1,
  > h2,
  > h3,
  > h4,
  > h5,
  > h6,
  > ul,
  > ol,
  > div,
  > aside {
    margin-top: 0;
    margin-bottom: var(--space-xl);
  }

  *:last-child {
    margin-bottom: 0;
  }

  ul,
  ol {
    list-style: initial;
  }

  li {
    margin-bottom: var(--space-md);

    ${breakpoint.lg} {
      margin-bottom: 0;
    }
  }
`

export const Image = styled(GatsbyImage)`
  &&& {
    margin-bottom: var(--space-xl);
  }

  div:first-child[style] {
    padding-top: 56.25% !important;
  }
`

export const Title = styled.h2`
  text-transform: uppercase;

  &&& {
    margin-bottom: var(--space-lg);
  }
`

export const Meta = styled.h5`
  color: var(--color-accent);

  &&& {
    /* margin-bottom: var(--space-lg); */
  }
`

export const Separator = styled.span`
  margin-left: var(--space-sm);

  &:before {
    content: '•';
  }
`

export const ReadingTime = styled.span`
  &:before {
    content: '☕️';
    margin: 0 var(--space-sm);
  }

  &:after {
    content: 'min read';
    margin-left: var(--space-sm);
  }
`

export const Description = styled.p``

export const Clap = styled.button`
  font: var(--font-code);
  cursor: pointer;
  border: none;
  margin: auto;
  color: var(--color-text);
  background-color: transparent;

  &:before {
    content: '👏 ';
  }
`
