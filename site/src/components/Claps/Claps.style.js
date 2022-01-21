import styled from 'styled-components'

export const ClapButton = styled.button`
  border: none;
  cursor: pointer;
  color: var(--color-text);
  padding: var(--space-lg);
  font-family: var(--font-family-code);
  font-size: var(--font-size-xs);
  background-color: transparent;
  filter: ${({ clicked }) => `grayscale(${clicked ? 0 : 100}%)`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:before {
    content: '👏';
    font-size: var(--font-size-lg);
  }

  &:active,
  &:focus,
  &:hover {
    filter: grayscale(0%);
  }
`
