import { Roboto, Roboto_Mono, Roboto_Slab } from 'next/font/google'

export const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '700'],
})

export const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '500', '700'],
})

export const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-code',
  weight: ['400', '500', '700'],
})
