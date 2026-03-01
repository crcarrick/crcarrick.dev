import fs from 'node:fs'
import path from 'node:path'

import matter from 'gray-matter'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')
const PROJECTS_DIR = path.join(process.cwd(), 'content/projects')

const EPOCH = new Date('1970-01-01T00:00:00.000Z').getTime()

export interface PostFrontmatter {
  author: string
  description: string
  featuredIcon: string
  featuredImage: string
  published: string
  tags: string[]
  title: string
}

export interface Post {
  content: string
  frontmatter: PostFrontmatter
  readingTime: number
  slug: string
}

export interface ProjectFrontmatter {
  created: string
  description: string
  icon: string
  meta: string
  repo: string
  screenshots: string[]
  title: string
}

export interface Project {
  content: string
  frontmatter: ProjectFrontmatter
  slug: string
}

function estimateReadingTime(content: string): number {
  const words = content.split(/\s+/).length
  return Math.ceil(words / 200)
}

function getMdxFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return []

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => path.join(dir, file))
}

export function getAllPosts(): Post[] {
  const files = getMdxFiles(BLOG_DIR)

  return files
    .map((filePath) => {
      const raw = fs.readFileSync(filePath, 'utf-8')
      const { content, data } = matter(raw)
      const slug = path.basename(filePath, '.mdx')
      const frontmatter = data as PostFrontmatter

      return {
        content,
        frontmatter,
        readingTime: estimateReadingTime(content),
        slug,
      }
    })
    .filter((post) => new Date(post.frontmatter.published).getTime() !== EPOCH)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.published).getTime() -
        new Date(a.frontmatter.published).getTime(),
    )
}

export function getPostBySlug(slug: string): Post | undefined {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) return undefined

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { content, data } = matter(raw)

  return {
    content,
    frontmatter: data as PostFrontmatter,
    readingTime: estimateReadingTime(content),
    slug,
  }
}

export function getAllPostSlugs(): string[] {
  return getAllPosts().map((post) => post.slug)
}

export function getAllProjects(): Project[] {
  const files = getMdxFiles(PROJECTS_DIR)

  return files
    .map((filePath) => {
      const raw = fs.readFileSync(filePath, 'utf-8')
      const { content, data } = matter(raw)
      const slug = path.basename(filePath, '.mdx')

      return {
        content,
        frontmatter: data as ProjectFrontmatter,
        slug,
      }
    })
    .filter((project) => new Date(project.frontmatter.created).getTime() !== EPOCH)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.created).getTime() -
        new Date(a.frontmatter.created).getTime(),
    )
}

export function getProjectBySlug(slug: string): Project | undefined {
  const filePath = path.join(PROJECTS_DIR, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) return undefined

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { content, data } = matter(raw)

  return {
    content,
    frontmatter: data as ProjectFrontmatter,
    slug,
  }
}

export function getAllProjectSlugs(): string[] {
  return getAllProjects().map((project) => project.slug)
}

export function getAllTags(): string[] {
  const posts = getAllPosts()
  const tagSet = new Set<string>()

  posts.forEach((post) => {
    post.frontmatter.tags?.forEach((tag) => tagSet.add(tag))
  })

  return Array.from(tagSet).sort()
}
