import React from 'react'

import * as S from './Logo.style'

export const Logo = (props) => (
  <React.Fragment>
    <S.Logo {...props} />
    <S.Name>Chris Carrick</S.Name>
  </React.Fragment>
)
