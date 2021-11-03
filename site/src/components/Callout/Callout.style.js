import styled, { css } from 'styled-components';

import { rhythm } from '@utils/typography';

const variants = {
  danger: {
    bg: 'var(--bg-aside-danger)',
    bd: 'var(--danger)',
  },
  warning: {
    bg: 'var(--bg-aside-warning)',
    bd: 'var(--warning)',
  },
  info: {
    bg: 'var(--bg-aside-info)',
    bd: 'var(--info)',
  },
  success: {
    bg: 'var(--bg-aside-success)',
    bd: 'var(--success)',
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
