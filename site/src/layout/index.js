/* eslint-disable react/jsx-pascal-case */
import React from 'react';

import { Seo } from './Seo/Seo';
import { Nav } from './Nav/Nav';
import { Footer } from './Footer/Footer';

import * as S from './style';

export const Layout = ({ children, path }) => {
  return (
    <S.PageWrapper>
      <Seo path={path} title="Chris Carrick - Developer" />
      <Nav />
      <S.Main>{children}</S.Main>
      <Footer />
    </S.PageWrapper>
  );
};
