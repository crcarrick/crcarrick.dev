import { Link as GatsbyLink } from 'gatsby';
import styled, { css } from 'styled-components';

import { rhythm } from '@utils/typography';
import { Nav } from '@views/Layout/Header/Header.style';
import { Article } from '@views/Post/Post.style';

const style = css`
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  &:active,
  &:hover,
  &:focus {
    outline: none;
    text-decoration: underline var(--color-primary) var(--border-width);
  }

  ${Nav} & {
    padding: ${rhythm(1 / 4)};
    text-transform: uppercase;
    text-underline-offset: var(--border-width);
  }

  ${Article} & {
    color: var(--color-text);
    text-decoration: underline var(--color-primary) var(--border-width);

    &:hover,
    &:focus {
      box-shadow: 0 var(--border-width) 0 0 var(--color-accent);
    }
  }
`;

export const InternalLink = styled(GatsbyLink)`
  ${style}
`;

export const ExternalLink = styled.a`
  ${style}
`;
