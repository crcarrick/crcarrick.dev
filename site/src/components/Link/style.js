import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';

export const Link = styled(GatsbyLink)`
  font-family: var(--font);
  font-weight: 700;
  padding: 0.5rem;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  color: var(--blue);
  cursor: pointer;

  &:hover,
  &:focus-visible {
    text-decoration: underline var(--red) 3px;
  }
`;
