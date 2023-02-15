import { type VariantProps } from 'class-variance-authority'
import NextLink, { type LinkProps as NextLinkProps } from 'next/link'

import { link } from './Link.style'

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

type LinkStyleProps = VariantProps<typeof link>

export default function Link<T extends LinkType>({
  type,
  href,
  context,
  ...props
}: LinkProps<T> & LinkStyleProps) {
  return type === 'external' ? (
    <a className={link({ context })} href={href} {...props} />
  ) : (
    <NextLink className={link({ context })} href={href} {...props} />
  )
}
