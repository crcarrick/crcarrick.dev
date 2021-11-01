import styled, { css } from 'styled-components';

import { breakpoint, hexToRgba } from '@utils/mixins';

export const Pre = styled.pre`
  font-size: 0.85rem;
  font-weight: 500;
  font-family: inherit;
  padding: 0.75rem;
  margin: 2rem;
  margin: 0;
  overflow-x: auto;

  ${breakpoint.md} {
    font-size: 1rem;
    padding: 1rem;
  }
`;

export const Line = styled.div`
  ${({ highlight }) =>
    highlight &&
    css`
      background-color: ${hexToRgba('#44475a', 0.75)};
      box-shadow: inset 4px 0 0 0 var(--primary);
    `}
`;
