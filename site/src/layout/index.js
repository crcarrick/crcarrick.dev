/* eslint-disable react/jsx-pascal-case */
import React, { Fragment, useContext } from 'react';

import { Seo } from './Seo/Seo';
import { Nav } from './Nav/Nav';
import { Footer } from './Footer/Footer';

import { Theme } from '@style/theme';

import * as S from './style';

export const Layout = ({ children, path }) => {
  const { styledTheme, theme, toggleTheme } = useContext(Theme.Context);

  return (
    <Fragment>
      <S.Toggle
        aria-label="Toggle dark mode on or off"
        checked={theme === 'dark'}
        onChange={toggleTheme}
        checkedIcon={<S.Sun />}
        uncheckedIcon={<S.Moon />}
        onColor={styledTheme.text}
        onHandleColor={styledTheme.body}
        offColor={styledTheme.text}
        offHandleColor={styledTheme.body}
        handleDiameter={20}
      />

      <S.PageWrapper>
        <Seo path={path} title="Chris Carrick - Developer" />
        <Nav />
        <S.Main>{children}</S.Main>
        <Footer />
      </S.PageWrapper>
    </Fragment>
  );
};
