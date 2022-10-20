import React from 'react'

import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'
import * as S from './Layout.style'
import { Seo } from './Seo/Seo'

export const Layout = ({ children, content, path, seoTitle }) => {
  return (
    <S.PageWrapper>
      <Seo path={path} content={content} seoTitle={seoTitle} />
      <Header />
      <S.Main>{children}</S.Main>
      <Footer />
    </S.PageWrapper>
  )
}
