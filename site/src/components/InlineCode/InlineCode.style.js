import styled from 'styled-components';

import { scale } from '@utils/typography';

const { fontSize } = scale(-(1 / 6));

export const InlineCode = styled.code`
  font-family: monospace;
  font-size: ${fontSize};
  word-break: break-word;
  background-color: var(--bg-inline-code);
  padding: 4px;
`;
