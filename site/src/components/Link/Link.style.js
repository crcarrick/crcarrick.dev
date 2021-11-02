import { Link as GatsbyLink } from 'gatsby';
import styled, { css } from 'styled-components';

import { List as ListNav } from '@components/Layout/Nav/Nav.style';
import { Article as PostArticle } from '@style/templates/post.style';

const style = css`
  font-family: var(--font-mono);
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  &:active,
  &:hover,
  &:focus {
    outline: none;
    text-decoration: underline var(--primary) 3px;
  }

  ${ListNav} & {
    font-weight: 700;
    padding: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 2.5px;
  }

  ${PostArticle} & {
    color: var(--text);
    text-decoration: underline var(--primary) 3px;

    &:focus {
      box-shadow: 0 3px 0 0 var(--link-post-underline);
    }
  }
`;

export const InternalLink = styled(GatsbyLink)`
  ${style}
`;

export const ExternalLink = styled.a`
  ${style}
`;
