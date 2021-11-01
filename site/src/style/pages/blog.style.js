import styled from 'styled-components';
import { Link } from 'gatsby';

import { breakpoint, transition } from '@utils/mixins';

export const Posts = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;

  ${breakpoint.lg} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const PostLink = styled(Link)`
  transition: ${transition('all')};

  &:active,
  &:hover,
  &:focus & {
    outline: none;
    transform: translateY(-0.25rem);
    box-shadow: 0 4px 0 var(--primary);
  }
`;
