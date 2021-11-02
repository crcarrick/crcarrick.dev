import styled, { css } from 'styled-components';

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
  padding: 1rem 2rem;
  margin: 1.5rem auto;
  width: 100%;

  ${({ variant = 'success' }) => {
    const callout = variants[variant];

    return css`
      background-color: ${callout.bg};
      border-left: solid 0.25rem ${callout.bd};
    `;
  }}
`;
