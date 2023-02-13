import { type GetStaticPropsResult } from 'next'
import Link from 'next/link'

import { getPosts } from '~/lib/blog'

type Posts = Awaited<ReturnType<typeof getPosts>>

type PostsProps = {
  readonly posts: Posts
}

export async function getStaticProps(): Promise<GetStaticPropsResult<PostsProps>> {
  const posts = await getPosts()

  return {
    props: {
      posts,
    },
  }
}

export default function Posts({ posts }: PostsProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
      {posts.map(({ slug, frontmatter: { title } }) => (
        <Link key={slug} href={`/blog/${slug}`}>
          {title}
        </Link>
      ))}
    </div>
  )
}
