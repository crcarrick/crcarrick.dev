import styled, { css } from 'styled-components'

import LogoSVG from '~/assets/svg/logo.svg'
import { supports } from '~/utils/mixins'
import { Link } from '~/views/Layout/Header/Header.style'

export const Logo = styled(LogoSVG)`
  width: var(--space-xl);
  height: var(--space-xl);
  cursor: pointer;

  g#logoFillStroke {
    fill: var(--color-primary);
    stroke: var(--color-dark);
  }
`

export const Name = styled.h4`
  padding: var(--space-md);
  text-transform: uppercase;
  margin: 0;

  ${Link}:focus & {
    text-decoration-line: underline;
    text-decoration-color: var(--color-primary);
    ${supports(
      css`
        text-decoration-thickness: var(--border-width);
      `
    )}
    ${supports(
      css`
        text-underline-offset: var(--border-width);
      `
    )}
  }
`
