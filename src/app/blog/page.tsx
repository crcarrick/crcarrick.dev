import Link from 'next/link'

import { localFetch } from '~/lib/fetch'
import { type Post } from '~/types'

type JSONResponse = {
  readonly posts: Post[]
}

export default async function BlogPage() {
  const response = await localFetch('/api/blog')

  if (!response.ok) throw new Error('Error fetching blog posts')

  const { posts }: JSONResponse = await response.json()

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
