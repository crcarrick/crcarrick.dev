import React from 'react';

import * as S from './DevIcon.style';

export const devicon = ({ icon = 'javascript' }) => {
  const Icon = S[icon];

  if (!Icon) return null;

  return <Icon />;
};
