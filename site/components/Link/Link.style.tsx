import Link from 'next/link'
import styled, { css } from 'styled-components'

import { supports } from '~/utils/mixins'

const BaseStyle = css`
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

  // TODO: Add contextual styles for {Nav} & {Article}
`

export const InternalLink = styled(Link)`
  ${BaseStyle}
`

export const ExternalLink = styled.a`
  ${BaseStyle}
`
