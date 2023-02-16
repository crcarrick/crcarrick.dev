import { roboto, robotoMono, robotoSlab } from '~/fonts'
import { cx } from '~/utils/cva'

import '~/styles/global.css'

import { Providers } from './providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(roboto.variable, robotoMono.variable, robotoSlab.variable)}
    >
      <head />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
