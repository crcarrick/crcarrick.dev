import styled from 'styled-components';

import { Link } from '@views/Layout/Header/Header.style';

import LogoSVG from '@assets/svg/logo.svg';

export const Logo = styled(LogoSVG)`
  width: var(--space-xl);
  height: var(--space-xl);
  cursor: pointer;

  g#logoFillStroke {
    fill: var(--color-primary);
    stroke: var(--color-dark);
  }
`;

export const Name = styled.h4`
  padding: var(--space-md);
  text-transform: uppercase;
  margin: 0;

  ${Link}:focus & {
    text-decoration: underline var(--color-primary) var(--border-width);
    text-underline-offset: var(--border-width);
  }
`;
