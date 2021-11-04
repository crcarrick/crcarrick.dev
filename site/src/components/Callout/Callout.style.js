import styled, { css } from 'styled-components';

const variants = {
  danger: {
    bg: 'var(--bg-callout-danger)',
    bd: 'var(--color-danger)',
  },
  warning: {
    bg: 'var(--bg-callout-warning)',
    bd: 'var(--color-warning)',
  },
  info: {
    bg: 'var(--bg-callout-info)',
    bd: 'var(--color-info)',
  },
  success: {
    bg: 'var(--bg-callout-success)',
    bd: 'var(--color-success)',
  },
};

export const Callout = styled.aside`
  padding: var(--space-lg) var(--space-xl);
  margin: var(--space-xl) auto;
  width: 100%;

  ${({ variant = 'success' }) => {
    const callout = variants[variant];

    return css`
      background-color: ${callout.bg};
      border-left: solid calc(var(--border-width) * 2) ${callout.bd};
    `;
  }}
`;
