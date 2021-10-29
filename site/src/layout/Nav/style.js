import styled from 'styled-components';

import LogoSVG from '@assets/svg/logo.svg';

import { breakpoint } from '@utils/mixins';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 1.25rem;
  margin-bottom: 1rem;

  ${breakpoint.lg} {
    margin-top: 2.5rem;
    margin-bottom: 1rem;
  }
`;

export const List = styled.ul`
  display: flex;
`;

export const Logo = styled(LogoSVG)`
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;

  ${breakpoint.md} {
    width: 1.75rem;
    height: 1.75rem;
  }

  ${breakpoint.lg} {
    width: 2rem;
    height: 2rem;
  }
`;
