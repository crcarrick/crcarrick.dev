'use client'

import { type ReactNode } from 'react'

import { useSize } from '~/hooks/useSize'

type ProvidersProps = {
  readonly children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  const size = useSize()

  console.log(size)

  return <>{children}</>
}
