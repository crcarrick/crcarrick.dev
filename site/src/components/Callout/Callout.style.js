import styled, { css } from 'styled-components'

const variants = {
  danger: {
    background: 'var(--bg-danger)',
    border: 'var(--color-danger)',
  },
  warning: {
    background: 'var(--bg-warning)',
    border: 'var(--color-warning)',
  },
  info: {
    background: 'var(--bg-info)',
    border: 'var(--color-info)',
  },
  success: {
    background: 'var(--bg-success)',
    border: 'var(--color-success)',
  },
}

export const Callout = styled.aside`
  padding: var(--space-lg) var(--space-xl);
  margin-bottom: var(--space-xl);
  font-size: 0.85rem;
  width: 100%;

  ${({ variant = 'success' }) => {
    const { background, border } = variants[variant]

    return css`
      background-color: ${background};
      border-left: solid calc(var(--border-width) * 2) ${border};
    `
  }}
`
