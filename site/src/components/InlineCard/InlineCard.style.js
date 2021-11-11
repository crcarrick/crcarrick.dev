import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import { Link } from '@views/Blog/Blog.style';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: var(--bg-card);
  padding: var(--space-md);

  ${Link}:active &,
  ${Link}:focus &,
  ${Link}:hover & {
    box-shadow: inset 0 0 0 var(--border-width) var(--color-primary);
  }

  ${Link}:focus-visible & {
    outline: solid var(--border-width) var(--color-accent);
    outline-offset: var(--border-width);
  }
`;

export const Row = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: var(--space-md);
`;

export const IconWrapper = styled.div`
  display: flex;
`;

export const Title = styled.h4`
  text-transform: uppercase;
  margin: 0;
  margin-left: var(--space-md);
  flex: 1;
  max-width: 100%;
`;

export const Meta = styled.h6`
  margin: 0;
`;

export const Separator = styled.span`
  margin-left: var(--space-sm);

  &:before {
    content: '•';
  }
`;

export const ReadingTime = styled.span`
  &:before {
    content: '☕️';
    margin: 0 var(--space-sm);
  }

  &:after {
    content: 'min read';
    margin-left: var(--space-sm);
  }
`;

export const Tags = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  font-family: var(--font-family-code);
  font-size: 0.65rem;
  color: var(--color-primary);
`;

export const Tag = styled.span`
  &:not(:last-child):after {
    content: '•';
  }
`;
