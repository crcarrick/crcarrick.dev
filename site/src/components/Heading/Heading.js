import React from 'react';

import * as S from './Heading.style';

export const Heading = {
  H1: (props) => <S.Heading.H1 {...props} />,
  H2: (props) => <S.Heading.H2 {...props} />,
  H3: (props) => <S.Heading.H3 {...props} />,
  H4: (props) => <S.Heading.H4 {...props} />,
  H5: (props) => <S.Heading.H5 {...props} />,
  H6: (props) => <S.Heading.H6 {...props} />,
};
