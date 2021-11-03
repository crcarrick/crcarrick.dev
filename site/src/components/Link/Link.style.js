import { Link as GatsbyLink } from 'gatsby';
import styled, { css } from 'styled-components';

import { rhythm } from '@utils/typography';
import { List as ListNav } from '@views/Layout/Nav/Nav.style';
import { Article as PostArticle } from '@views/Post/Post.style';

const style = css`
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  &:active,
  &:hover,
  &:focus {
    outline: none;
    text-decoration: underline var(--primary) var(--border-width);
  }

  ${ListNav} & {
    padding: ${rhythm(1 / 4)};
    text-transform: uppercase;
    text-underline-offset: var(--border-width);
  }

  ${PostArticle} & {
    color: var(--text);
    text-decoration: underline var(--primary) var(--border-width);

    &:focus-visible {
      box-shadow: 0 var(--border-width) 0 0 var(--secondary);
    }
  }
`;

export const InternalLink = styled(GatsbyLink)`
  ${style}
`;

export const ExternalLink = styled.a`
  ${style}
`;
