import styled from 'styled-components';

export const Button = styled.button`
  padding: var(--space-md) var(--space-lg);
  text-transform: uppercase;
  color: var(--color-body);
  background-color: var(--color-text);
  border: none;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    color: var(--color-text);
    background-color: var(--color-primary);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  }
`;
