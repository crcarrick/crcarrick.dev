import styled, { css } from 'styled-components'

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

// Hack to make line highlighting work right on smaller screens
export const CodeWrapper = styled.div`
  background-color: var(--bg-code);
  overflow: auto;

  pre[class*='language-'] {
    background-color: transparent;
    float: left;
    min-width: 100%;
  }
`

export const Pre = styled.pre`
  color: var(--color-white);
  padding: var(--space-lg);
  overflow-x: auto;
  margin: 0;
  font: var(--font-code);
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

export const Tag = styled.span`
  position: relative;

  &:after {
    ${({ language }) => {
      const { backgroundColor, color } = getTagColors(language)

      return css`
        position: absolute;
        top: 0;
        right: var(--space-lg);
        content: '${language}';
        padding: var(--space-sm);
        border-radius: inherit;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        font: var(--font-code);
        text-transform: uppercase;
        background-color: ${backgroundColor};
        color: ${color};
      `
    }}
  }
`
