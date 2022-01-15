import React from 'react'

import Typography from 'typography'

import { useSize } from '~/hooks/useSize'
import { size as breakpointSize } from '~/utils/mixins'

const baseConfig = {
  headerFontFamily: ['Roboto Slab', 'Georgia', 'serif'],
  bodyFontFamily: ['Roboto', 'Tahoma', 'sans-serif'],
  baseFontSize: 16,
  baseLineHeight: 1.5,
  scaleRatio: 3,
}

const initialTypography = new Typography(baseConfig)

export const useTypography = () => {
  const [currentTypography, setCurrentTypography] = React.useState(initialTypography)
  const size = useSize()

  const setTypography = (config = baseConfig) => {
    const typography = new Typography(config)

    const css = typography.toString()

    setCurrentTypography({ ...typography, css })
  }

  React.useLayoutEffect(() => {
    const responsiveConfig = {}

    if (size === breakpointSize.md) {
      responsiveConfig.baseFontSize = 18
      responsiveConfig.baseLineHeight = 1.625
    } else if (size === breakpointSize.lg) {
      responsiveConfig.baseFontSize = 20
      responsiveConfig.baseLineHeight = 1.75
    }

    setTypography({
      ...baseConfig,
      ...responsiveConfig,
    })
  }, [size])

  console.log('test')

  return currentTypography
}
