import styled from 'styled-components';

export const InlineCode = styled.code`
  font-family: var(--font-family-code);
  word-break: break-word;
  background-color: var(--bg-code-inline);
  padding: 0.2em 0;
  font-size: 0.85rem;

  &:before,
  &:after {
    letter-spacing: -0.2em;
    content: '\u00A0';
  }
`;
