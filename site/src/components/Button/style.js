import styled from 'styled-components';

export const Button = styled.button`
  font-family: var(--font);
  font-weight: 700;
  padding: 0.5rem 1.5rem;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  color: var(--blue);
  background-color: var(--white);
  border: none;
  border-radius: 4rem;
  transition: var(--transition);
  cursor: pointer;

  &:hover {
    text-decoration: underline var(--red) 3px;
    color: var(--white);
    background-color: var(--red);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  }
`;
