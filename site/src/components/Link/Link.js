import React from 'react'

import * as S from './Link.style'

export const Link = (props) => {
  return props.to ? <S.InternalLink {...props} /> : <S.ExternalLink {...props} />
}
