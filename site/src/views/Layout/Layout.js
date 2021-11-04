import React, { Fragment } from 'react';

import { Seo } from './Seo/Seo';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

import * as S from './Layout.style';

export const Layout = ({ children, path, post }) => {
  return (
    <Fragment>
      <S.PageWrapper>
        <Seo path={path} post={post} />
        <Header />
        <S.Main>{children}</S.Main>
        <Footer />
      </S.PageWrapper>
    </Fragment>
  );
};
