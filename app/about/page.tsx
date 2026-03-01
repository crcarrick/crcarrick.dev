import type { Metadata } from 'next'

import Image from 'next/image'

import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'About',
}

export default function AboutPage() {
  return (
    <div className="py-12">
      <h1 className="mb-8 font-heading text-3xl font-bold">About</h1>

      <div className="flex flex-col gap-8 md:flex-row">
        <div className="shrink-0">
          <Image
            alt={siteConfig.author.name}
            className="rounded-lg"
            height={200}
            priority
            src="/images/me.png"
            width={200}
          />
        </div>

        <div className="prose dark:prose-invert prose-a:text-primary-light dark:prose-a:text-primary-dark max-w-none">
          <p>{siteConfig.description}</p>
          <p>
            Based in {siteConfig.author.location}. Find me on{' '}
            <a
              href={`https://github.com/${siteConfig.social.github}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            ,{' '}
            <a
              href={`https://linkedin.com/in/${siteConfig.social.linkedin}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
            , or{' '}
            <a
              href={`https://twitter.com/${siteConfig.social.twitter.replace('@', '')}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              Twitter
            </a>
            .
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="mb-4 font-heading text-2xl font-semibold">
          And this is Milo
        </h2>
        <Image
          alt="Milo the dog"
          className="rounded-lg"
          height={400}
          src="/images/milo.jpg"
          width={600}
        />
      </div>
    </div>
  )
}
