import type { Metadata } from 'next'

import { notFound } from 'next/navigation'

import { getAllProjectSlugs, getProjectBySlug } from '@/lib/content'
import { MdxContent } from '@/lib/mdx'

export const revalidate = 3600

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) return {}

  return {
    description: project.frontmatter.description,
    title: project.frontmatter.title,
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) notFound()

  return (
    <article className="py-12">
      <h1 className="mb-8 font-heading text-3xl font-bold">
        {project.frontmatter.title}
      </h1>
      <div className="prose prose-lg dark:prose-invert prose-headings:font-heading prose-a:text-primary-light dark:prose-a:text-primary-dark max-w-none">
        <MdxContent source={project.content} />
      </div>
    </article>
  )
}
