import styled from 'styled-components';

export const InlineCode = styled.code`
  font: var(--font-code);
  word-break: break-word;
  background-color: var(--bg-code-inline);
  padding: 0.3em 0;

  &:before,
  &:after {
    letter-spacing: 0em;
    content: '\u00A0';
  }
`;
