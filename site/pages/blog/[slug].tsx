import type { GetStaticPropsContext, GetStaticPropsResult, GetStaticPathsResult } from 'next'
import { getPosts, getPostBySlug } from '~/lib/blog'

type PageParams = {
  readonly slug: string
}

type Post = Awaited<ReturnType<typeof getPostBySlug>>

type PostProps = {
  readonly post: Post
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<PageParams>): Promise<GetStaticPropsResult<PostProps>> {
  const post = await getPostBySlug(params?.slug)

  return {
    props: {
      post,
    },
  }
}

export async function getStaticPaths(): Promise<GetStaticPathsResult<PageParams>> {
  const posts = await getPosts()

  return {
    paths: posts.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  }
}

export default function Post({ post }: PostProps) {
  return (
    <pre>
      <code>{JSON.stringify(post, null, 2)}</code>
    </pre>
  )
}
