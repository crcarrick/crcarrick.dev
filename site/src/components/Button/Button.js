import React from 'react'

import { navigate } from 'gatsby'

import * as S from './Button.style'

export const Button = ({ children, onClick = () => {}, to, ...props }) => {
  const handleClick = (event) => (to ? navigate(to) : onClick(event))

  return (
    <S.Button {...props} onClick={handleClick}>
      {children}
    </S.Button>
  )
}
