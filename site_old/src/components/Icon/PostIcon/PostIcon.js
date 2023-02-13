import React from 'react'

import loadable from '@loadable/component'

import { IconWrapper } from './PostIcon.style'

const icons = {
  gatsby: 'GatsbyIcon',
  javascript: 'JavascriptIcon',
  react: 'ReactIcon',
  redux: 'ReduxIcon',
  'styled-components': 'StyledComponentsIcon',
  weakauras: 'WeakAurasIcon',
}

export const PostIcon = ({ tags = ['react'] }) => {
  let icon

  for (let tag of tags) {
    icon = icons[tag]

    if (icon) break
  }

  if (!icon) icon = icons.javascript

  const Icon = loadable(() => import('./PostIcon.style'), {
    resolveComponent: (components) => components[icon],
  })

  return (
    <IconWrapper>
      <Icon />
    </IconWrapper>
  )
}
