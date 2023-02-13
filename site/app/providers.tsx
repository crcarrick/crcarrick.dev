'use client'

import { type ReactNode } from 'react'

import { GlobalStyle } from '~/styles/GlobalStyle'

type ProvidersProps = {
  readonly children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  )
}
