import { formatDistance } from 'date-fns'
import Image from 'next/image'

import { siteConfig } from '@/lib/config'

export function Bio() {
  const experience = formatDistance(new Date(2015, 10), new Date())

  return (
    <div className="hidden items-start gap-4 md:flex">
      <Image
        alt={siteConfig.author.name}
        className="rounded-full"
        height={64}
        src="/images/me.png"
        width={64}
      />
      <p className="text-sm leading-relaxed text-text-light/70 dark:text-text-dark/70">
        {siteConfig.author.bio.replace('{experience}', experience)}
      </p>
    </div>
  )
}
