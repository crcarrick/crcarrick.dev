import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  border: none;
  padding: 0.5rem 1rem;
  margin-bottom: 2rem;
  background-color: var(--text);
  color: var(--body);

  &:active,
  &:hover,
  &:focus {
    outline: solid 3px var(--primary);
  }
`;
