import VerticalRhythm from 'compass-vertical-rhythm'

type Spacing = {
  readonly xs: number
  readonly sm: number
  readonly md: number
  readonly lg: number
  readonly xl: number
}

export function spacing(): Spacing {
  const style = getComputedStyle(document.documentElement)

  const baseFontSize = style.getPropertyValue('--font-size')
  const baseLineHeight = style.getPropertyValue('--line-height')

  const { rhythm } = VerticalRhythm({ baseFontSize, baseLineHeight })

  return {
    xs: rhythm(1 / 8),
    sm: rhythm(1 / 6),
    md: rhythm(1 / 4),
    lg: rhythm(1 / 2),
    xl: rhythm(1 / 1),
  }
}
