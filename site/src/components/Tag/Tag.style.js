import styled, { css } from 'styled-components';

import { transition } from '@utils/mixins';
import { rhythm, scale } from '@utils/typography';

const style = () => {
  const { fontSize, lineHeight } = scale(-1 / 5);
  const margin = rhythm(1 / 4);
  const padding = rhythm(1 / 4);

  return css`
    font-family: var(--font-family-heading);
    font-size: ${fontSize};
    line-height: ${lineHeight};
    margin: 0 ${margin} ${margin} 0;
    padding: ${padding};
    text-transform: uppercase;
    border: solid var(--border-width) var(--color-primary);
    white-space: nowrap;
    line-height: 1;
  `;
};

export const Tag = styled.div`
  ${style}
`;

export const TagButton = styled.button`
  ${style}

  cursor: pointer;
  transition: ${transition('all')};

  ${({ isActive }) => {
    const background = isActive ? 'var(--color-primary)' : 'transparent';
    const color = isActive ? 'var(--color-white)' : 'inherit';

    return css`
      background: ${background};
      color: ${color};
    `;
  }}

  &:hover {
    background: var(--color-primary);
    color: var(--color-white);
  }

  &:focus-visible {
    transition: none;
    outline: solid calc(var(--border-width) / 2) var(--color-accent);
    outline-offset: calc(var(--border-width) / 2);
  }
`;
