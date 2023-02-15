import fs from 'fs/promises'
import { join } from 'path'

import { serialize } from 'next-mdx-remote/serialize'

import { isProjectFrontMatter, type Project } from '~/types'

const PROJECTS_DIRECTORY = join(process.cwd(), 'content', 'projects')

export async function getProjects() {
  const slugs = await fs.readdir(PROJECTS_DIRECTORY)
  const projects = await Promise.all(slugs.map(getProjectBySlug))

  return projects.filter((project): project is Project => project !== null)
}

export async function getProjectBySlug(
  rawSlug?: string
): Promise<Project | null> {
  if (!rawSlug) return null

  const slug = rawSlug.replace(/\.mdx$/, '')
  const path = join(PROJECTS_DIRECTORY, `${slug}.mdx`)

  const contents = await fs.readFile(path, 'utf8')
  const { frontmatter, compiledSource } = await serialize(contents, {
    parseFrontmatter: true,
  })

  if (isProjectFrontMatter(frontmatter)) {
    return {
      slug,
      frontmatter,
      compiledSource,
    }
  }

  return null
}
