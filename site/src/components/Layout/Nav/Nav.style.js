import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: var(--margin) 0;
`;

export const List = styled.ul`
  display: flex;
`;

export const Link = styled(GatsbyLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
  }
`;
