import styled, { css } from 'styled-components';
import Switch from 'react-switch';

import { breakpoint } from '@utils/mixins';

import SunSVG from '@assets/svg/icons/sun.svg';
import MoonSVG from '@assets/svg/icons/moon.svg';

export const Border = styled.hr`
  border: none;
  background-color: var(--color-text);
  margin: calc(var(--space-xl) - 1.5px) 0;
  width: 100%;
  height: 1.5px;
`;

export const Footer = styled.footer`
  display: flex;
  margin-bottom: var(--space-lg);
  justify-content: space-between;
  align-items: center;

  ${breakpoint.md} {
    align-items: flex-end;
    margin-bottom: var(--space-xl);
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 4px;
  margin: 0;
  padding: 0;

  ${breakpoint.md} {
    grid-template-columns: 1fr;
  }

  li {
    margin: 0;
  }
`;

export const Toggle = styled(Switch)``;

const icon = css`
  width: 100%;
  height: 100%;
`;

export const Sun = styled(SunSVG)`
  ${icon}
  fill: var(--color-body);
  padding: 4px;
`;

export const Moon = styled(MoonSVG)`
  ${icon}
  fill: var(--color-white);
  padding: 5px;
`;
