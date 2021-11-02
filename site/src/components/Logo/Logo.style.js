import styled from 'styled-components';

import { breakpoint, transition } from '@utils/mixins';
import { Link } from '@components/Layout/Nav/Nav.style';

import LogoSVG from '@assets/svg/logo.svg';

const getWidth =
  (bp) =>
  ({ width }) => {
    switch (bp) {
      case breakpoint.md:
        return `${width + width * 0.25}rem`;
      case breakpoint.lg:
        return `${width + width * 0.5}rem`;
      default:
        return `${width}rem`;
    }
  };

export const Logo = styled(LogoSVG)`
  width: ${getWidth()};
  height: ${getWidth()};
  cursor: pointer;
  transition: ${transition('fill', 'stroke')};

  g#logoFillStroke {
    fill: var(--logo-fill);
    stroke: var(--logo-stroke);
  }

  ${breakpoint.md} {
    width: ${getWidth(breakpoint.md)};
    height: ${getWidth(breakpoint.md)};
  }

  ${breakpoint.lg} {
    width: ${getWidth(breakpoint.lg)};
    height: ${getWidth(breakpoint.lg)};
  }
`;

export const Name = styled.span`
  padding: 0.5rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  display: none;

  ${breakpoint.md} {
    display: block;
  }

  ${Link}:focus & {
    text-decoration: underline var(--primary) 3px;
  }
`;
