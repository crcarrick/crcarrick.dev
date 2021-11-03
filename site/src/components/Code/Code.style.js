import styled, { css } from 'styled-components';

import { breakpoint } from '@utils/mixins';

// Hack to make line highlighting work right on smaller screens
export const CodeWrapper = styled.div`
  background-color: var(--bg-code);
  overflow: auto;
  margin: var(--margin) 0;

  pre[class*='language-'] {
    background-color: transparent;
    float: left;
    min-width: 100%;
  }
`;

export const Pre = styled.pre`
  font: var(--font-code);
  color: var(--white);
  padding: calc(var(--padding) / 2);
  overflow-x: auto;
  margin: 0;

  ${breakpoint.lg} {
    font: var(--font-code);
  }
`;

export const Line = styled.div`
  border-left: solid calc(var(--border-width) * 2) transparent;

  ${({ highlight }) =>
    highlight &&
    css`
      background-color: var(--bg-code-highlight);
      border-left-color: var(--primary);
    `}
`;
