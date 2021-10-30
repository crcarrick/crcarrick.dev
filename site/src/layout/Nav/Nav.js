import React from 'react';

import { Link as GatsbyLink } from 'gatsby';

import { Link } from '@components';

import * as S from './style';

export const Nav = () => (
  <S.Nav>
    <GatsbyLink to="/">
      <S.Logo />
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
