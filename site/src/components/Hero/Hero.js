import React from 'react';

import * as S from './Hero.style';

const heros = {
  construction: S.ConstructionHero,
  desk: S.DeskHero,
  404: S.FourOhFourHero,
  500: S.FiveHundredHero,
};

export const Hero = ({ type }) => {
  const Component = heros[type];

  if (!Component) return null;

  return (
    <S.HeroWrapper>
      <Component />
    </S.HeroWrapper>
  );
};
