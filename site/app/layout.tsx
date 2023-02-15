import { cx } from 'class-variance-authority'

import { Link } from '~/components'
import { roboto, robotoMono, robotoSlab } from '~/fonts'

import '~/styles/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        roboto.variable,
        robotoMono.variable,
        robotoSlab.variable
      )}
    >
      <head />
      <body>
        <Link type="internal" href="" context="article">Projects</Link>
        {children}
      </body>
    </html>
  )
}
