import React from 'react'

export const useDelayedHover = (delay) => {
  const [hovered, setHovered] = React.useState(false)
  const [hoveredTimeout, setHoveredTimeout] = React.useState(null)

  const onMouseEnter = React.useCallback(
    () => setHoveredTimeout(setTimeout(() => setHovered(true), delay)),
    [delay, setHovered, setHoveredTimeout]
  )
  const onMouseLeave = React.useCallback(() => {
    clearTimeout(hoveredTimeout)
    setHoveredTimeout(null)
    setHovered(false)
  }, [hoveredTimeout, setHovered, setHoveredTimeout])

  return {
    hovered,
    onMouseEnter,
    onMouseLeave,
  }
}
