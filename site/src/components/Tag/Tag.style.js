import styled, { css } from 'styled-components'

import { breakpoint } from '~/utils/mixins'

const style = css`
  font: var(--font-code);
  text-transform: uppercase;
  border: solid var(--border-width) var(--color-primary);
  white-space: nowrap;
  line-height: 1;
  padding: var(--space-md);

  ${breakpoint.lg} {
    padding: var(--space-sm);
  }
`

export const Tag = styled.div`
  ${style}
`

export const TagButton = styled.button`
  ${style}

  cursor: pointer;

  ${({ isActive }) => {
    const backgroundColor = isActive ? 'var(--color-primary)' : 'transparent'
    const color = isActive ? 'var(--color-white)' : 'inherit'

    return css`
      background-color: ${backgroundColor};
      color: ${color};
    `
  }}

  @media(hover: hover) {
    &:hover {
      background-color: var(--color-primary);
      color: var(--color-white);
    }
  }

  &:focus-visible {
    outline: solid var(--border-width) var(--color-accent);
    outline-offset: var(--border-width);
  }
`
