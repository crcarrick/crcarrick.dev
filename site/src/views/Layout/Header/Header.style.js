import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  margin: var(--margin-base) 0;
  font-family: var(--font-family-heading);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Nav = styled.nav`
  display: flex;
  margin: 0;
  padding: 0;
`;

export const Link = styled(GatsbyLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
  }
`;
