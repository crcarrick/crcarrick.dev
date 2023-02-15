'use client'

import { type ReactNode } from 'react'

type ProvidersProps = {
  readonly children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return <>{children}</>
}