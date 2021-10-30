import styled from 'styled-components';

import { breakpoint } from '@utils/mixins';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;

  ${breakpoint.lg} {
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
  }
`;

export const List = styled.ul`
  display: flex;
`;
