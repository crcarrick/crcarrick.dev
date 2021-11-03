import { Link } from 'gatsby';
import styled from 'styled-components';

import { breakpoint, transition } from '@utils/mixins';
import { rhythm } from '@utils/typography';

export const Posts = styled.div`
  display: grid;
  gap: var(--margin);
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
    transform: translateY(${rhythm(-1 / 6)});
    box-shadow: 0 calc(var(--border-width) * 2) 0 var(--primary);
  }
`;
