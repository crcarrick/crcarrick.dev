import React from 'react'

import loadable from '@loadable/component'

import { IconWrapper } from './PlatformIcon.style'

const icons = {
  linux: 'LinuxIcon',
  macos: 'AppleIcon',
  windows: 'WindowsIcon',
}

export const PlatformIcon = ({ type }) => {
  if (!icons[type]) return null

  const Icon = loadable(() => import('./PlatformIcon.style'), {
    resolveComponent: (components) => components[icons[type]],
  })

  return (
    <IconWrapper>
      <Icon />
    </IconWrapper>
  )
}
