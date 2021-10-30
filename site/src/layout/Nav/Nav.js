import React from 'react';

import { Link as GatsbyLink } from 'gatsby';

import { Link, Logo } from '@components';

import * as S from './style';

export const Nav = () => (
  <S.Nav>
    <GatsbyLink to="/">
      <Logo width={1.5} />
    </GatsbyLink>

    <S.List>
      <li>
        <Link to="/">About</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </S.List>
  </S.Nav>
);
