import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'

import { breakpoint } from '~/utils/mixins'

export const Header = styled.header`
  width: 100%;
  margin: var(--space-xl) 0;
  margin-top: var(--space-lg);
  font-family: var(--font-family-heading);
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${breakpoint.md} {
    margin-top: var(--space-xl);
  }
`

export const Nav = styled.nav`
  display: flex;
  margin: 0;
  padding: 0;
`

export const Link = styled(GatsbyLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
  }
`
