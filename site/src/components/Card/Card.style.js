import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import { Link } from '@views/Blog/Blog.style';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: var(--bg-card);
  padding: var(--space-lg);

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
  flex-direction: column;
  /* padding: var(--space-lg); */
`;

export const ImageWrapper = styled.div`
  min-height: 1px;
  margin-bottom: var(--space-lg);
`;

export const Image = styled(GatsbyImage)`
  div:first-child[style] {
    padding-top: 56.25% !important;
  }
`;

export const Title = styled.h3`
  text-transform: uppercase;
  margin-bottom: var(--space-lg);
  flex: 1;
  max-width: 100%;
`;

export const Meta = styled.h6`
  margin-bottom: var(--space-lg);
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

export const Excerpt = styled.p`
  margin-bottom: var(--space-lg);
  font-size: 0.85rem;
`;

export const Tags = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  font-family: var(--font-family-code);
  gap: var(--space-md);
`;
