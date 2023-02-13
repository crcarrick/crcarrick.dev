import {
  type GetStaticPathsResult,
  type GetStaticPropsContext,
  type GetStaticPropsResult,
} from 'next'
import styled from 'styled-components'

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

const StyledCode = styled.code`
  background: grey;
  color: white;
`

export default function Post({ post }: PostProps) {
  return (
    <pre>
      <StyledCode>{JSON.stringify(post, null, 2)}</StyledCode>
    </pre>
  )
}
