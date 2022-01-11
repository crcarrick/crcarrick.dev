import { GatsbyImage } from 'gatsby-plugin-image'
import styled, { css } from 'styled-components'

import { breakpoint } from '~/utils/mixins'
import { Link } from '~/views/Blog/Blog.style'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: var(--bg-card);
  padding: var(--space-md);

  ${Link}:active &,
  ${Link}:focus &,
  ${Link}:hover & {
    box-shadow: inset 0 0 0 var(--border-width) var(--color-primary);
  }

  ${Link}:focus-visible & {
    outline: solid var(--border-width) var(--color-accent);
    outline-offset: var(--border-width);
  }

  ${breakpoint.md} {
    padding: var(--space-lg);
  }
`

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${breakpoint.md} {
    flex-direction: column-reverse;
  }
`

export const Row = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: var(--space-md);

  ${breakpoint.md} {
    flex-direction: column;
    align-items: initial;
    padding: 0;
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  min-height: 1px;

  ${breakpoint.md} {
    display: block;
    padding: 0;
    margin-bottom: var(--space-lg);
  }
`

export const Image = styled(GatsbyImage)`
  ${breakpoint.md} {
    div:first-child[style] {
      padding-top: 56.25% !important;
    }
  }
`

const titleStyles = css`
  text-transform: uppercase;
  margin: 0;
  margin-left: var(--space-lg);
  flex: 1;
  max-width: 100%;

  ${breakpoint.md} {
    margin-bottom: var(--space-lg);
    margin-left: 0;
  }
`

export const TitleH3 = styled.h3`
  ${titleStyles}
`

export const TitleH4 = styled.h4`
  ${titleStyles}
`

export const Excerpt = styled.p`
  display: none;

  ${breakpoint.md} {
    display: block;
    margin-bottom: var(--space-lg);
    font-size: 0.85rem;
  }
`

export const Meta = styled.h6`
  margin: 0;

  ${breakpoint.md} {
    margin-bottom: var(--space-lg);
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

export const Tags = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  font-family: var(--font-family-code);
  font-size: 0.65rem;
  color: var(--color-primary);

  ${breakpoint.md} {
    gap: var(--space-md);
    font: var(--font-family-code);
    color: var(--color-text);
  }
`

export const Tag = styled.span`
  &:not(:last-child):after {
    content: '•';
  }
`
