import type { Metadata } from 'next'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { ThemeProvider } from '@/components/theme-provider'
import { siteConfig } from '@/lib/config'
import { roboto, robotoMono, robotoSlab } from '@/lib/fonts'

import './globals.css'

export const metadata: Metadata = {
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    description: siteConfig.description,
    locale: 'en_US',
    siteName: siteConfig.author.name,
    title: siteConfig.author.name,
    type: 'website',
    url: siteConfig.url,
  },
  title: {
    default: siteConfig.author.name,
    template: `%s | ${siteConfig.author.name}`,
  },
  twitter: {
    card: 'summary_large_image',
    creator: siteConfig.social.twitter,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      className={`${roboto.variable} ${robotoSlab.variable} ${robotoMono.variable}`}
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          <div className="mx-auto flex min-h-svh max-w-[60ch] flex-col px-6 lg:px-0">
            <Header />
            <main className="flex flex-1 flex-col">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
