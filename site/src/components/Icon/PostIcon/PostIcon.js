import React from 'react'

import * as S from './PostIcon.style'

const icons = {
  gatsby: S.GatsbyIcon,
  javascript: S.JavascriptIcon,
  react: S.ReactIcon,
  redux: S.ReduxIcon,
  'styled-components': S.StyledComponentsIcon,
  weakauras: S.WeakAurasIcon,
}

export const PostIcon = ({ tags = ['react'] }) => {
  let Icon

  for (let tag of tags) {
    Icon = icons[tag]

    if (Icon) break
  }

  if (!Icon) Icon = icons.javascript

  return <Icon />
}
