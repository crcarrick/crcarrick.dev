import styled, { css } from 'styled-components';

import { rhythm } from '@utils/typography';

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
  padding: ${rhythm(1 / 2)} ${rhythm(1)};
  margin: ${rhythm(1)} auto;
  width: 100%;

  ${({ variant = 'success' }) => {
    const callout = variants[variant];

    return css`
      background-color: ${callout.bg};
      border-left: solid calc(var(--border-width) * 2) ${callout.bd};
    `;
  }}
`;
