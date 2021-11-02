import React from 'react';

import { Link } from '@components/Link';
import { Logo } from '@components/Logo';

import * as S from './Nav.style';

export const Nav = () => (
  <S.Nav>
    <S.Link to="/">
      <Logo width={1.5} />
    </S.Link>

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
