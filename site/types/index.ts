type PostFrontMatter = {
  readonly title: string
  readonly description: string
  readonly featuredImage: string
  readonly featuredIcon: string
  readonly author: string
  readonly published: Date
  readonly tags: string[]
}

export function isPostFrontMatter(
  value: Record<string, unknown> = {}
): value is PostFrontMatter {
  return true
}

export type Post = {
  readonly slug: string
  readonly frontmatter: PostFrontMatter
  readonly compiledSource: string
}

type ProjectFrontMatter = {
  readonly meta: string
  readonly icon: string
  readonly repo: string
  readonly title: string
  readonly created: Date
  readonly description: string
  readonly screenshots: string[]
}

export function isProjectFrontMatter(
  value: Record<string, unknown> = {}
): value is ProjectFrontMatter {
  return true
}

export type Project = {
  readonly slug: string
  readonly frontmatter: ProjectFrontMatter
  readonly compiledSource: string
}

export type ProjectAsset = {
  readonly os: string
  readonly name: string
  readonly downloadUrl: string
}
