import styled, { css } from 'styled-components';
import Switch from 'react-switch';

import { breakpoint } from '@utils/mixins';

import SunSVG from '@assets/svg/sun.svg';
import MoonSVG from '@assets/svg/moon.svg';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 56rem;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 1rem;

  ${breakpoint.md} {
    padding: 0 2rem;
  }

  ${breakpoint.lg} {
    padding: 0;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
`;

export const Toggle = styled(Switch)`
  position: absolute !important; // figure out how to get rid of this
  top: 1rem;
  right: 1rem;
`;

const icon = css`
  width: 100%;
  height: 100%;
`;

export const Sun = styled(SunSVG)`
  ${icon}
  fill: var(--blue);
  padding: 4px;
`;

export const Moon = styled(MoonSVG)`
  ${icon}
  fill: var(--white);
  padding: 5px;
`;
