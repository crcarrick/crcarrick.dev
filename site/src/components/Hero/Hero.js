import React from 'react'

import loadable from '@loadable/component'

import * as S from './Hero.style'

const heros = {
  construction: 'Construction',
  desk: 'Desk',
  404: 'FourOhFour',
  500: 'FiveHundred',
}

export const Hero = ({ type }) => {
  if (!heros[type]) return null

  const Component = loadable(() => import(`./heros/${heros[type]}.js`))

  return (
    <S.HeroWrapper>
      <Component />
    </S.HeroWrapper>
  )
}
