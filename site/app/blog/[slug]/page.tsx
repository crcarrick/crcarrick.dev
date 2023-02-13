import { localFetch } from '~/lib/fetch'
import { Post } from '~/types'

type PostProps = {
  readonly params: {
    readonly slug: string
  }
}

type JSONResponse = {
  readonly post: Post
}

export default async function BlogPostPage({ params }: PostProps) {
  const response = await localFetch(`/api/blog/${params.slug}`)

  if (!response.ok) throw new Error('Error fetching blog post')

  const { post }: JSONResponse = await response.json()

  return (
    <pre>
      <code>{JSON.stringify(post, null, 2)}</code>
    </pre>
  )
}
