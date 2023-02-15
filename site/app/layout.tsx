import { roboto, robotoMono, robotoSlab } from '~/fonts'
import { cx } from '~/utils/cva'

import '~/styles/global.css'

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
      <body>{children}</body>
    </html>
  )
}
