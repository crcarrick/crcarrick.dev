import React, { Fragment } from 'react';

import * as S from './Logo.style';

export const Logo = (props) => (
  <Fragment>
    <S.Logo {...props} />
    <S.Name>Chris Carrick</S.Name>
  </Fragment>
);
