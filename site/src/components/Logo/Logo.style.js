import styled from 'styled-components';

import { breakpoint, transition } from '@utils/mixins';
import { Link } from '@components/Layout/Nav/Nav.style';

import LogoSVG from '@assets/svg/logo.svg';
import { rhythm } from '@utils/typography';

export const Logo = styled(LogoSVG)`
  width: ${rhythm(1)};
  height: ${rhythm(1)};

  cursor: pointer;
  transition: ${transition('fill', 'stroke')};

  g#logoFillStroke {
    fill: var(--logo-fill);
    stroke: var(--logo-stroke);
  }
`;

export const Name = styled.h3`
  padding: ${rhythm(1 / 3)};
  text-transform: uppercase;
  display: none;
  margin: 0;

  ${breakpoint.md} {
    display: block;
  }

  ${Link}:focus & {
    text-decoration: underline var(--primary) 2px;
  }
`;
