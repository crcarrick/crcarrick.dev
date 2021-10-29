import React from 'react';

import { navigate } from 'gatsby';

import * as S from './style';

export const Button = ({ children, to, ...props }) => {
  const handleClick = () => (to ? navigate(to) : null);

  return (
    <S.Button {...props} onClick={handleClick}>
      {children}
    </S.Button>
  );
};
