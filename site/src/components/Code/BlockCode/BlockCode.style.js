import styled, { css } from 'styled-components'

import { Button } from '~/components/Button'
import { transition } from '~/utils/mixins'

const getTagColors = (language) => {
  switch (language) {
    case 'js':
    case 'javascript':
    case 'jsx':
      return { backgroundColor: '#f0db4f', color: 'var(--color-dark)' }
    case 'html':
      return { backgroundColor: '#e34c26', color: 'var(--color-white)' }
    case 'css':
      return { backgroundColor: '#3c99dc', color: 'var(--color-white)' }
    default:
      return { backgroundColor: 'var(--color-black)', color: 'var(--color-white)' }
  }
}

export const CopyButton = styled(Button)`
  position: absolute;
  bottom: var(--space-md);
  right: var(--space-md);
  color: var(--color-dark);
  background-color: var(--color-white);
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: ${transition('background-color', 'opacity')};

  &:hover,
  &:focus,
  &:active {
    color: var(--color-white);
    background-color: var(--color-primary);
  }
`

export const CodeWrapper = styled.div`
  background-color: var(--bg-code);
`

export const HoverWrapper = styled.div`
  position: relative;
`

export const ScrollWrapper = styled.div`
  width: 100%;
  overflow: auto;

  pre[class*='language-'] {
    background-color: transparent;
    float: left;
    min-width: 100%;
  }
`

export const Pre = styled.pre`
  margin: 0;
  font: var(--font-code);
  color: var(--color-white);
  padding: var(--space-lg);
`

export const Line = styled.div`
  border-left: solid calc(var(--border-width) * 2) transparent;

  ${({ willHighlightLines }) =>
    willHighlightLines &&
    css`
      padding-left: var(--space-sm);
    `}

  ${({ highlight }) =>
    highlight &&
    css`
      background-color: var(--bg-code-highlight);
      border-left-color: var(--color-primary);
      border-radius: 0;
      padding-left: var(--space-sm);
    `}
`

/**
 * TODO: There is something wrong with the top right border radius here
 *       There is a small spec of black that looks bad
 */
export const Toolbar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: var(--color-dark);
`

export const Filename = styled.div`
  display: flex;
  align-items: center;
  font: var(--font-code);
  font-size: 0.65rem;
  padding: var(--space-sm);
  margin-left: var(--space-sm);
  color: var(--color-white);
`

export const Language = styled.div`
  ${({ children }) => {
    const { backgroundColor, color } = getTagColors(children)

    return css`
      font: var(--font-code);
      padding: var(--space-sm);
      border-radius: 0;
      border-top-right-radius: inherit;
      text-transform: uppercase;
      background-color: ${backgroundColor};
      color: ${color};
    `
  }}
`
