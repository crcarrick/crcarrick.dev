import styled, { css } from 'styled-components';
import Switch from 'react-switch';

import { breakpoint, transition } from '@utils/mixins';

import SunSVG from '@assets/svg/sun.svg';
import MoonSVG from '@assets/svg/moon.svg';

export const Border = styled.hr`
  border: none;
  background-color: var(--text);
  transition: ${transition('background-color')};
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  width: 100%;
  height: 2px;

  ${breakpoint.lg} {
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
  }
`;

export const Footer = styled.footer`
  display: flex;
  position: relative;
  margin-bottom: 1.25rem;
  justify-content: space-between;
  align-items: center;

  ${breakpoint.md} {
    align-items: flex-end;
  }

  ${breakpoint.lg} {
    margin-bottom: 2.5rem;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 4px;

  ${breakpoint.md} {
    grid-template-columns: 1fr;
  }
`;

export const Toggle = styled(Switch)``;

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
