import { useEffect, useState } from 'react'

import resolveConfig from 'tailwindcss/resolveConfig'
import { type KeyValuePair, type ScreensConfig } from 'tailwindcss/types/config'

import tailwindConfig from '../../tailwind.config'

const { theme } = resolveConfig(tailwindConfig)

const sizeSet = new Set(['sm', 'md', 'lg', 'xl'] as const)

type Size = typeof sizeSet extends Set<infer T> ? T : never

type MediaMatcherPair = {
  readonly matcher: MediaQueryList
  readonly handler: (ev: MediaQueryListEvent) => void
}

type MediaMatchersMap = Map<Size, MediaMatcherPair>

type ScreenPair = [Size, string]

function isSize(val: string): val is Size {
  return Set.prototype.has.call(sizeSet, val)
}

function isObjectScreens(
  screens?: ScreensConfig
): screens is KeyValuePair<string, string> {
  return (
    screens !== null && typeof screens === 'object' && !Array.isArray(screens)
  )
}

export function useSize() {
  const [size, setSize] = useState<Size | null>(null)

  useEffect(() => {
    const screens = theme?.screens

    let matchers: MediaMatchersMap

    if (isObjectScreens(screens)) {
      matchers = new Map(
        Object.entries(screens)
          .filter((screen): screen is ScreenPair => isSize(screen[0]))
          .map(([size, breakpoint]) => {
            const pair: MediaMatcherPair = {
              matcher: window.matchMedia(
                `screen and (min-width: ${breakpoint})`
              ),
              handler: ({ matches }) => matches && setSize(size),
            }

            return [size, pair]
          })
      )

      matchers.forEach((pair) => {
        pair.matcher.addEventListener('change', pair.handler)
      })
    }

    return () => {
      matchers.forEach((pair) => {
        pair.matcher.removeEventListener('change', pair.handler)
      })
    }
  }, [])

  return size
}
