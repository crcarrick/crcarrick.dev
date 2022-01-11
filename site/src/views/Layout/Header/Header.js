import React from 'react';

import { Link } from '@components/Link';
import { Logo } from '@components/Logo';

import * as S from './Header.style';

export const Header = () => (
  <S.Header>
    <S.Link to="/">
      <Logo width={1.5} />
    </S.Link>

    <S.Nav>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
    </S.Nav>
  </S.Header>
);
