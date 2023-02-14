'use client'

import { type LinkProps as NextLinkProps } from 'next/link'

import * as Styled from './Link.style'

type LinkType = 'internal' | 'external'

type BaseLinkProps<T extends LinkType> = {
  readonly children: React.ReactNode
  readonly type: T
}

type InternalLinkProps = BaseLinkProps<'internal'> & NextLinkProps

type ExternalLinkProps = BaseLinkProps<'external'> & {
  readonly href: string
}

type LinkProps<T extends LinkType> = T extends 'internal'
  ? InternalLinkProps
  : T extends 'external'
  ? ExternalLinkProps
  : never

export default function Link<T extends LinkType>({
  type,
  href,
  ...props
}: LinkProps<T>) {
  return type === 'external' ? (
    <Styled.ExternalLink href={href} {...props} />
  ) : (
    <Styled.InternalLink href={href} {...props} />
  )
}
