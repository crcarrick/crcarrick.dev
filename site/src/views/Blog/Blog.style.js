import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';

export const Posts = styled.div`
  display: grid;
  gap: var(--space-xl);
  grid-template-columns: 1fr;
`;

export const Link = styled(GatsbyLink)`
  &:active,
  &:hover,
  &:focus {
    outline: none;
  }
`;
