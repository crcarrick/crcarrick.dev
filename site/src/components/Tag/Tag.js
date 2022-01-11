import React from 'react';

import * as S from './Tag.style';

export const Tag = ({ variant, ...props }) =>
  variant === 'button' ? <S.TagButton {...props} /> : <S.Tag {...props} />;
