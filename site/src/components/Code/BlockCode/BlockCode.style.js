import styled, { css } from 'styled-components';

// Hack to make line highlighting work right on smaller screens
export const CodeWrapper = styled.div`
  background-color: var(--bg-code);
  overflow: auto;

  pre[class*='language-'] {
    background-color: transparent;
    float: left;
    min-width: 100%;
  }
`;

export const Pre = styled.pre`
  color: var(--color-white);
  padding: var(--space-lg);
  overflow-x: auto;
  margin: 0;
  font: var(--font-code);
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
