import styled, { css } from 'styled-components';

import { breakpoint } from '@utils/mixins';
import { rhythm } from '@utils/typography';

// Hack to make line highlighting work right on smaller screens
export const CodeWrapper = styled.div`
  background-color: var(--bg-code);
  overflow: auto;
  margin: ${rhythm(1)} 0;

  pre[class*='language-'] {
    background-color: transparent;
    float: left;
    min-width: 100%;
  }
`;

export const Pre = styled.pre`
  font: var(--font-family-code);
  color: var(--color-white);
  padding: calc(var(--padding-base) / 2);
  /* padding: ${rhythm(1 / 2)}; */
  overflow-x: auto;
  margin: 0;

  ${breakpoint.lg} {
    font: var(--font-family-code);
  }
`;

export const Line = styled.div`
  border-left: solid calc(var(--border-width) * 2) transparent;

  ${({ highlight }) =>
    highlight &&
    css`
      background-color: var(--bg-code-highlight);
      border-left-color: var(--color-primary);
    `}
`;
