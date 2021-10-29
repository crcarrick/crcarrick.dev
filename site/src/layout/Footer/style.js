import styled from 'styled-components';

import { breakpoint, transition } from '@utils/mixins';

export const Footer = styled.footer`
  display: flex;
  margin-bottom: 1.25rem;

  ${breakpoint.lg} {
    margin-bottom: 2.5rem;
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
