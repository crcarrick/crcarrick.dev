import fs from 'fs/promises'
import { join } from 'path'

import { serialize } from 'next-mdx-remote/serialize'

import { isPostFrontMatter, type Post } from '~/types'

const POSTS_DIRECTORY = join(process.cwd(), 'content', 'blog')

export async function getPosts() {
  const filenames = await fs.readdir(POSTS_DIRECTORY)
  const posts = await Promise.all(filenames.map(getPostBySlug))

  return posts.filter((post): post is Post => post !== null)
}

export async function getPostBySlug(rawSlug?: string): Promise<Post | null> {
  if (!rawSlug) return null

  const slug = rawSlug.replace(/\.mdx$/, '')
  const path = join(POSTS_DIRECTORY, `${slug}.mdx`)

  const contents = await fs.readFile(path, 'utf8')
  const { frontmatter, compiledSource } = await serialize(contents, {
    parseFrontmatter: true,
  })

  if (isPostFrontMatter(frontmatter)) {
    return {
      slug,
      frontmatter,
      compiledSource,
    }
  }

  return null
}