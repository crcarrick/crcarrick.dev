import styled, { css } from 'styled-components';
import Switch from 'react-switch';

import { breakpoint, transition } from '@utils/mixins';

import SunSVG from '@assets/svg/icons/sun.svg';
import MoonSVG from '@assets/svg/icons/moon.svg';

export const Border = styled.hr`
  border: none;
  background-color: var(--text);
  transition: ${transition('background-color')};
  margin: var(--margin) 0;
  width: 100%;
  height: 2px;
`;

export const Footer = styled.footer`
  display: flex;
  position: relative;
  margin-bottom: var(--margin);
  justify-content: space-between;
  align-items: center;

  ${breakpoint.md} {
    align-items: flex-end;
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
