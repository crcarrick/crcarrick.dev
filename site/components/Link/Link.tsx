import { type VariantProps } from 'class-variance-authority'
import NextLink, { type LinkProps as NextLinkProps } from 'next/link'

import { type ClassNameProp } from '~/types'
import { cva, cx } from '~/utils/cva'

type LinkType = 'internal' | 'external'

type LinkTypeProp<T extends LinkType> = {
  readonly type: T
}

type InternalLinkProps = LinkTypeProp<'internal'> & NextLinkProps

type ExternalLinkProps = LinkTypeProp<'external'> & {
  readonly href: string
}

type AnchorProps<T extends LinkType> = T extends 'internal'
  ? InternalLinkProps
  : T extends 'external'
  ? ExternalLinkProps
  : never

const link = cva(
  [
    'no-underline',
    'cursor-pointer',
    'pseudo:outline-none',
    'pseudo:underline',
    'pseudo:decoration-primary',
    'pseudo:decoration-2',
  ],
  {
    variants: {
      context: {
        nav: ['p-md', 'uppercase', 'underline-offset-2'],
        article: [
          'text-text',
          'underline',
          'decoration-primary',
          'decoration-2',
          'underline-offset-2',
          'hocus:no-underline',
          'hocus:bg-primary',
          'hocus:text-white',
        ],
      },
    },
  }
)

type LinkProps<T extends LinkType> = React.PropsWithChildren<
  ClassNameProp & AnchorProps<T> & VariantProps<typeof link>
>

export default function Link<T extends LinkType>({
  type,
  href,
  context,
  className,
  ...props
}: LinkProps<T>) {
  return type === 'external' ? (
    <a className={cx(className, link({ context }))} href={href} {...props} />
  ) : (
    <NextLink className={link({ context })} href={href} {...props} />
  )
}
