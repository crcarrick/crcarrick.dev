/* eslint-disable no-fallthrough */

import styled, { css } from 'styled-components';

const callouts = {
  danger: {
    bg: 'var(--aside-danger-bg)',
    bd: 'var(--aside-danger-bd)',
  },
  warning: {
    bg: 'var(--aside-warning-bg)',
    bd: 'var(--aside-warning-bd)',
  },
  info: {
    bg: 'var(--aside-info-bg)',
    bd: 'var(--aside-info-bd)',
  },
  success: {
    bg: 'var(--aside-success-bg)',
    bd: 'var(--aside-success-bd)',
  },
};

const StyledCallout = styled.aside`
  padding: 1rem 2rem;
  margin: 1.5rem auto;

  ${({ variant = 'success' }) => {
    const callout = callouts[variant];

    return css`
      background-color: ${callout.bg};
      border-left: solid 0.25rem ${callout.bd};
    `;
  }}
`;

export const Callout = StyledCallout;
