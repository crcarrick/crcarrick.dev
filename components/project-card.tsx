'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import type { Project } from '@/lib/content'

import { Carousel } from './carousel'

interface ReleaseAsset {
  downloadUrl: string
  name: string
  os: string
}

const OS_LABELS: Record<string, string> = {
  linux: 'Linux',
  macos: 'Mac',
  windows: 'Windows',
}

function detectOS(): string | null {
  if (typeof navigator === 'undefined') return null
  const ua = navigator.userAgent.toLowerCase()
  if (ua.includes('mac')) return 'macos'
  if (ua.includes('win')) return 'windows'
  if (ua.includes('linux')) return 'linux'
  return null
}

export function ProjectCard({ project }: { project: Project }) {
  const { frontmatter } = project
  const [asset, setAsset] = useState<ReleaseAsset | null>(null)

  useEffect(() => {
    if (!frontmatter.repo) return

    fetch(`/api/project?repo=${encodeURIComponent(frontmatter.repo)}`)
      .then((res) => res.json())
      .then((data: { assets: ReleaseAsset[] }) => {
        const os = detectOS()
        const match = os
          ? data.assets.find((a) => a.os === os)
          : data.assets[0]
        if (match) setAsset(match)
      })
      .catch(() => {})
  }, [frontmatter.repo])

  return (
    <div className="rounded-lg border border-text-light/10 bg-white/50 p-6 dark:bg-white/5">
      <div className="flex items-start gap-4">
        {frontmatter.icon && (
          <Image
            alt={frontmatter.title}
            className="rounded-lg"
            height={48}
            src={frontmatter.icon}
            width={48}
          />
        )}
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-heading text-xl font-semibold">
              {frontmatter.title}
            </h3>
            {frontmatter.meta && (
              <span className="rounded bg-primary-light/10 px-2 py-0.5 font-code text-xs text-primary-light dark:bg-primary-dark/10 dark:text-primary-dark">
                {frontmatter.meta}
              </span>
            )}
          </div>
          <p className="mt-1 text-sm text-text-light/70 dark:text-text-dark/70">
            {frontmatter.description}
          </p>
        </div>
      </div>

      {frontmatter.screenshots && frontmatter.screenshots.length > 0 && (
        <div className="mt-6 hidden md:block">
          <Carousel images={frontmatter.screenshots} />
        </div>
      )}

      {frontmatter.repo && (
        <div className="mt-4">
          {asset ? (
            <a
              className="inline-flex items-center gap-2 rounded-md bg-primary-light px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-light/90 dark:bg-primary-dark dark:hover:bg-primary-dark/90"
              href={asset.downloadUrl}
              rel="noopener noreferrer"
            >
              Install for {OS_LABELS[asset.os] ?? asset.os}
            </a>
          ) : (
            <a
              className="inline-flex items-center gap-2 text-sm text-primary-light transition-colors hover:underline dark:text-primary-dark"
              href={`https://github.com/crcarrick/${frontmatter.repo}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              View on GitHub &rarr;
            </a>
          )}
        </div>
      )}
    </div>
  )
}
