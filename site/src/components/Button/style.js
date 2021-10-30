import styled from 'styled-components';

import { transition } from '@utils/mixins';

export const Button = styled.button`
  font-family: var(--font);
  font-weight: 700;
  padding: 0.5rem 1.5rem;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  color: var(--body);
  background-color: var(--text);
  border: none;
  border-radius: 4rem;
  transition: ${transition('color', 'background-color', 'box-shadow')};
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    color: var(--text);
    background-color: var(--red);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  }
`;
