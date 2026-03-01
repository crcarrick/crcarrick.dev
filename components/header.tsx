import Link from 'next/link'

import { siteConfig } from '@/lib/config'

import { Logo } from './logo'

export function Header() {
  return (
    <header className="mt-8 flex w-full items-center justify-between font-heading font-semibold md:mt-12">
      <Link className="flex items-center gap-3 focus:outline-none" href="/">
        <Logo className="h-10 w-10" />
        <span className="text-lg uppercase tracking-wide">
          {siteConfig.author.name}
        </span>
      </Link>

      <nav className="flex gap-6">
        {siteConfig.nav.map((item) => (
          <Link
            key={item.href}
            className="text-text-light/80 transition-colors hover:text-primary-light dark:text-text-dark/80 dark:hover:text-primary-dark"
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
