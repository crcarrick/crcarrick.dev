import styled, { css } from 'styled-components';
import Switch from 'react-switch';

import { breakpoint, transition } from '@utils/mixins';

import SunSVG from '@assets/svg/sun.svg';
import MoonSVG from '@assets/svg/moon.svg';

export const Footer = styled.footer`
  display: flex;
  position: relative;
  margin-bottom: 1.25rem;
  justify-content: space-between;
  align-items: center;

  ${breakpoint.lg} {
    margin-bottom: 2.5rem;
    align-items: flex-end;
  }
`;

export const Border = styled.hr`
  border: none;
  background-color: var(--text);
  transition: ${transition('background-color')};
  margin-top: 0.5rem;
  margin-bottom: 1.25rem;
  width: 100%;
  height: 2px;

  ${breakpoint.lg} {
    margin-top: 1rem;
    margin-bottom: 2.5rem;
  }
`;

export const List = styled.ul`
  display: flex;

  ${breakpoint.md} {
    flex-direction: column;
  }
`;

export const ListItem = styled.li`
  margin-left: 2px;
  margin-right: 2px;

  &:first-child {
    margin-left: 0;
  }

  ${breakpoint.md} {
    margin-left: 0;
    margin-right: 0;
    margin-top: 2px;
    margin-bottom: 2px;

    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const Toggle = styled(Switch)`
  /* position: absolute !important; // figure out how to get rid of this */
  /* bottom: 1.25rem;
  right: 1rem; */

  ${breakpoint.md} {
    /* right: 2rem; */
  }

  ${breakpoint.lg} {
    /* position: fixed !important; */
    /* bottom: 1rem;
    right: 1rem; */
  }
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
