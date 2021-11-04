import { Link } from 'gatsby';
import styled from 'styled-components';

import { breakpoint, transition } from '@utils/mixins';

export const Posts = styled.div`
  display: grid;
  gap: var(--space-xl);
  grid-template-columns: 1fr;

  ${breakpoint.lg} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const PostLink = styled(Link)`
  transition: ${transition('all')};

  &:active,
  &:hover,
  &:focus,
  &:focus-visible & {
    outline: none;
    transform: translateY(calc(var(--space-sm) * -1));
    box-shadow: 0 calc(var(--border-width) * 2) 0 var(--color-primary);
  }
`;
