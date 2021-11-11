import React from 'react';

import * as S from './DevIcon.style';

const Icons = {
  gatsby: S.GatsbyIcon,
  redux: S.ReduxIcon,
  'styled-components': S.StyledComponentsIcon,
};

export const DevIcon = ({ icon = 'gatsby' }) => {
  const Icon = Icons[icon];

  console.log(icon);

  if (!Icon) return null;

  return <Icon />;
};
