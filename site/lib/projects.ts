import fs from 'fs/promises'
import { join } from 'path'

import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

type ProjectFrontMatter = {
  readonly meta: string
  readonly icon: string
  readonly repo: string
  readonly title: string
  readonly created: Date
  readonly description: string
  readonly screenshots: string[]
}

type Project = {
  readonly slug: string
  readonly frontmatter: ProjectFrontMatter
  readonly compiledSource: string
}

function isProjectFrontMatter(value: Record<string, any> = {}): value is ProjectFrontMatter {
  return true
}

const PROJECTS_DIRECTORY = join(process.cwd(), 'content', 'projects')

export async function getProjects() {
  const slugs = await fs.readdir(PROJECTS_DIRECTORY)
  const projects = await Promise.all(slugs.map(getProjectBySlug))

  return projects.filter((project): project is Project => project !== null)
}

export async function getProjectBySlug(rawSlug?: string): Promise<Project | null> {
  if (!rawSlug) return null

  const slug = rawSlug.replace(/\.mdx$/, '')
  const path = join(PROJECTS_DIRECTORY, `${slug}.mdx`)

  const contents = await fs.readFile(path, 'utf8')
  const { frontmatter, compiledSource } = await serialize(contents, { parseFrontmatter: true })

  if (isProjectFrontMatter(frontmatter)) {
    return {
      slug,
      frontmatter,
      compiledSource,
    }
  }

  return null
}
