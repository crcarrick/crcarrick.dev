import type { Metadata } from 'next'

import Image from 'next/image'
import { notFound } from 'next/navigation'

import { Bio } from '@/components/bio'
import { Claps } from '@/components/claps'
import { ReadingProgress } from '@/components/reading-progress'
import { Tag } from '@/components/tag'
import { getAllPostSlugs, getPostBySlug } from '@/lib/content'
import { MdxContent } from '@/lib/mdx'

export const revalidate = 3600

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) return {}

  return {
    description: post.frontmatter.description,
    openGraph: {
      images: post.frontmatter.featuredImage
        ? [post.frontmatter.featuredImage]
        : [],
      title: post.frontmatter.title,
      type: 'article',
    },
    title: post.frontmatter.title,
  }
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  const { content, frontmatter, readingTime } = post

  return (
    <>
      <ReadingProgress />
      <article className="py-12">
        <header className="mb-8">
        <h1 className="font-heading text-3xl font-bold md:text-4xl">
          {frontmatter.title}
        </h1>

        <div className="mt-4 flex items-center gap-3 text-sm text-text-light/60 dark:text-text-dark/60">
          <span>{frontmatter.author}</span>
          <span>&middot;</span>
          <time dateTime={frontmatter.published}>
            {formatDate(frontmatter.published)}
          </time>
          <span>&middot;</span>
          <span>{readingTime} min read</span>
        </div>

        {frontmatter.tags && frontmatter.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {frontmatter.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        )}
      </header>

      {frontmatter.featuredImage && (
        <Image
          alt={frontmatter.title}
          className="mb-8 w-full rounded-md"
          height={400}
          priority
          src={frontmatter.featuredImage}
          width={800}
        />
      )}

      <div className="prose prose-lg dark:prose-invert prose-headings:font-heading prose-a:text-primary-light prose-code:font-code dark:prose-a:text-primary-dark max-w-none">
        <MdxContent source={content} />
      </div>

      <Claps slug={slug} />

      <footer className="mt-8 border-t border-text-light/20 pt-8 dark:border-text-dark/20">
        <Bio />
      </footer>
    </article>
    </>
  )
}
