import { Link as GatsbyLink } from 'gatsby';
import styled, { css } from 'styled-components';

import { List as ListNav } from '@components/Layout/Nav/Nav.style';
import { Article as PostArticle } from '@style/templates/post.style';
import { rhythm } from '@utils/typography';

const style = css`
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  &:active,
  &:hover,
  &:focus {
    outline: none;
    text-decoration: underline var(--primary) 2px;
  }

  ${ListNav} & {
    padding: ${rhythm(1 / 4)};
    text-transform: uppercase;
  }

  ${PostArticle} & {
    color: var(--text);
    text-decoration: underline var(--primary) 2px;

    &:focus {
      box-shadow: 0 2px 0 0 var(--link-post-underline);
    }
  }
`;

export const InternalLink = styled(GatsbyLink)`
  ${style}
`;

export const ExternalLink = styled.a`
  ${style}
`;
