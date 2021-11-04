import styled from 'styled-components';

import { transition } from '@utils/mixins';
import { rhythm } from '@utils/typography';

export const Button = styled.button`
  padding: ${rhythm(1 / 4)} ${rhythm(1 / 2)};
  text-transform: uppercase;
  color: var(--color-body);
  background-color: var(--color-text);
  border: none;
  border-radius: ${rhythm(2)};
  transition: ${transition('color', 'background-color', 'box-shadow')};
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    color: var(--color-text);
    background-color: var(--color-primary);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  }
`;
