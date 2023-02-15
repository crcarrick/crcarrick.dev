import { Roboto, Roboto_Mono, Roboto_Slab } from '@next/font/google'

export const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--roboto',
  display: 'swap',
})

export const robotoMono = Roboto_Mono({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--roboto-mono',
  display: 'swap',
})

export const robotoSlab = Roboto_Slab({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--roboto-slab',
  display: 'swap',
})
