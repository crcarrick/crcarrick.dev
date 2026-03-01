'use client'

import { matchSorter } from 'match-sorter'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useMemo } from 'react'

import type { Post } from '@/lib/content'

import { Tag } from './tag'

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function BlogCard({ post }: { post: Post }) {
  const { frontmatter, readingTime, slug } = post

  return (
    <Link
      className="group block rounded-lg border border-text-light/10 bg-white/50 p-6 transition-all hover:border-primary-light/30 hover:shadow-sm dark:bg-white/5 dark:hover:border-primary-dark/30"
      href={`/blog/${slug}`}
    >
      {frontmatter.featuredImage && (
        <div className="mb-4 overflow-hidden rounded-md">
          <Image
            alt={frontmatter.title}
            className="aspect-video w-full object-cover transition-transform group-hover:scale-[1.02]"
            height={200}
            src={frontmatter.featuredImage}
            width={400}
          />
        </div>
      )}

      <h3 className="font-heading text-xl font-semibold group-hover:text-primary-light dark:group-hover:text-primary-dark">
        {frontmatter.title}
      </h3>

      <div className="mt-2 flex items-center gap-3 text-sm text-text-light/60 dark:text-text-dark/60">
        <time dateTime={frontmatter.published}>
          {formatDate(frontmatter.published)}
        </time>
        <span>&middot;</span>
        <span>{readingTime} min read</span>
      </div>

      {frontmatter.description && (
        <p className="mt-3 text-sm leading-relaxed text-text-light/70 dark:text-text-dark/70">
          {frontmatter.description}
        </p>
      )}

      {frontmatter.tags && frontmatter.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {frontmatter.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      )}
    </Link>
  )
}

export function BlogList({ posts }: { posts: Post[] }) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const query = searchParams.get('q') ?? ''
  const activeTags = searchParams.getAll('tag')

  const updateParams = useCallback(
    (updates: Record<string, string | string[] | null>) => {
      const params = new URLSearchParams(searchParams.toString())

      for (const [key, value] of Object.entries(updates)) {
        params.delete(key)
        if (value === null) continue
        if (Array.isArray(value)) {
          value.forEach((v) => params.append(key, v))
        } else if (value) {
          params.set(key, value)
        }
      }

      const qs = params.toString()
      router.replace(`${pathname}${qs ? `?${qs}` : ''}`, { scroll: false })
    },
    [pathname, router, searchParams],
  )

  const allTags = useMemo(() => {
    const tagSet = new Set<string>()
    posts.forEach((post) =>
      post.frontmatter.tags?.forEach((tag) => tagSet.add(tag)),
    )
    return Array.from(tagSet).sort()
  }, [posts])

  const results = useMemo(() => {
    const filters = [
      ...(query
        ? [
            (items: Post[]) =>
              matchSorter(items, query, {
                keys: ['frontmatter.title', 'frontmatter.tags'],
              }),
          ]
        : []),
      ...activeTags.map(
        (tag) => (items: Post[]) =>
          matchSorter(items, tag, { keys: ['frontmatter.tags'] }),
      ),
    ]

    return filters.reduceRight((items, filter) => filter(items), posts)
  }, [activeTags, posts, query])

  function toggleTag(tag: string) {
    const next = activeTags.includes(tag)
      ? activeTags.filter((t) => t !== tag)
      : [...activeTags, tag]
    updateParams({ tag: next.length > 0 ? next : null })
  }

  return (
    <div>
      <div className="mb-8 space-y-4">
        <input
          className="w-full rounded-md border border-text-light/20 bg-transparent px-4 py-2 text-sm placeholder:text-text-light/40 focus:border-primary-light focus:outline-none dark:border-text-dark/20 dark:placeholder:text-text-dark/40 dark:focus:border-primary-dark"
          onChange={(e) => updateParams({ q: e.target.value || null })}
          placeholder="Search posts..."
          type="text"
          value={query}
        />
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <Tag
              key={tag}
              active={activeTags.includes(tag)}
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </Tag>
          ))}
        </div>
      </div>

      {results.length > 0 ? (
        <div className="space-y-6">
          {results.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="py-8 text-center text-text-light/50 dark:text-text-dark/50">
          No posts found.
        </p>
      )}
    </div>
  )
}
