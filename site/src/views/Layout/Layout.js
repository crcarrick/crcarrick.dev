import React from 'react'

import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'
import * as S from './Layout.style'
import { Seo } from './Seo/Seo'

export const Layout = ({ children, path, post, seoTitle }) => {
  return (
    <S.PageWrapper>
      <Seo path={path} post={post} seoTitle={seoTitle} />
      <Header />
      <S.Main>{children}</S.Main>
      <Footer />
    </S.PageWrapper>
  )
}
