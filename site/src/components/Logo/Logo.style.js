import styled from 'styled-components';

import { breakpoint, transition } from '@utils/mixins';

import LogoSVG from '@assets/svg/logo.svg';

const getWidth =
  (bp) =>
  ({ width }) => {
    switch (bp) {
      case breakpoint.md:
        return `${width + width * 0.5}rem`;
      case breakpoint.lg:
        return `${width + width * 1.0}rem`;
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
