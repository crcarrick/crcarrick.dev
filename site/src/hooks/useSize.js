import React from 'react'

import { size as breakpointSize } from '~/utils/mixins'

export const useSize = () => {
  const [size, setSize] = React.useState(null)

  React.useLayoutEffect(() => {
    const md = window.matchMedia(`screen and (min-width: ${breakpointSize.md})`)
    const lg = window.matchMedia(`screen and (min-width: ${breakpointSize.lg})`)

    const onChange = () => {
      let sz = null

      if (md.matches) sz = breakpointSize.md
      if (lg.matches) sz = breakpointSize.lg

      setSize(sz)
    }

    md.addEventListener('change', onChange)
    lg.addEventListener('change', onChange)

    onChange()

    return () => {
      md.removeEventListener('change', onChange)
      lg.removeEventListener('change', onChange)
    }
  }, [])

  return size
}
