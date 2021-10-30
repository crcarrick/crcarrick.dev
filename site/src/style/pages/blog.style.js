import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

import { adjust, breakpoint, transition } from '@utils/mixins';

export const Post = styled.div``;

export const Link = styled(GatsbyLink)`
  flex: 1;
  height: 100%;
  background-color: var(--text);
  background-color: ${({ theme }) => adjust(theme.body, theme.name === 'dark' ? 20 : -20)};
  color: var(--text);
  transition: ${transition('all')};

  &:active,
  &:hover,
  &:focus {
    outline: none;
    transform: translateY(-0.25rem);
    box-shadow: 0 4px 0 var(--red);
  }
`;

export const Posts = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;

  ${breakpoint.lg} {
    grid-template-columns: 1fr 1fr;
  }
`;
