import { localFetch } from '~/lib/fetch'
import { type Post } from '~/types'

type PostProps = {
  readonly params: {
    readonly slug: string
  }
}

type BlogJSONResponse = {
  readonly posts: Post[]
}

type PostJSONResponse = {
  readonly post: Post
}

export async function generateStaticParams() {
  const response = await localFetch(`/api/blog`)
  const { posts }: BlogJSONResponse = await response.json()

  return posts.map(({ slug }) => {
    slug
  })
}

export default async function BlogPostPage({ params }: PostProps) {
  const response = await localFetch(`/api/blog/${params.slug}`)

  if (!response.ok) throw new Error('Error fetching blog post')

  const { post }: PostJSONResponse = await response.json()

  return (
    <pre>
      <code>{JSON.stringify(post, null, 2)}</code>
    </pre>
  )
}
