import { Link as GatsbyLink } from 'gatsby'
import styled, { css } from 'styled-components'

import { supports } from '~/utils/mixins'
import { Nav } from '~/views/Layout/Header/Header.style'
import { Article } from '~/views/Post/Post.style'

const style = css`
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  &:active,
  &:hover,
  &:focus {
    outline: none;
    text-decoration-line: underline;
    text-decoration-color: var(--color-primary);
    ${supports(
      css`
        text-decoration-thickness: var(--border-width);
      `
    )}
  }

  ${Nav} & {
    padding: var(--space-md);
    text-transform: uppercase;
    ${supports(
      css`
        text-underline-offset: var(--border-width);
      `
    )}
  }

  ${Article} & {
    color: var(--color-text);
    text-decoration-line: underline;
    text-decoration-color: var(--color-primary);

    ${supports(
      css`
        text-decoration-thickness: var(--border-width);
      `
    )}
    ${supports(
      css`
        text-underline-offset: var(--border-width);
      `
    )}

    &:hover,
    &:focus {
      text-decoration: none;
      background-color: var(--color-primary);
      color: var(--color-white);
    }
  }
`

export const InternalLink = styled(GatsbyLink)`
  ${style}
`

export const ExternalLink = styled.a`
  ${style}
`
