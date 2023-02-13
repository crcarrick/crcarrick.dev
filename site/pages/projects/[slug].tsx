import {
  type GetStaticPathsResult,
  type GetStaticPropsContext,
  type GetStaticPropsResult,
} from 'next'
import styled from 'styled-components'

import { getProjects, getProjectBySlug } from '~/lib/projects'

type PageParams = {
  readonly slug: string
}

type Project = Awaited<ReturnType<typeof getProjectBySlug>>

type ProjectProps = {
  readonly project: Project
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<PageParams>): Promise<GetStaticPropsResult<ProjectProps>> {
  const project = await getProjectBySlug(params?.slug)

  return {
    props: {
      project,
    },
  }
}

export async function getStaticPaths(): Promise<GetStaticPathsResult<PageParams>> {
  const projects = await getProjects()

  return {
    paths: projects.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  }
}

const StyledCode = styled.code`
  background: grey;
  color: white;
`

export default function Project({ project }: ProjectProps) {
  return (
    <pre>
      <StyledCode>{JSON.stringify(project, null, 2)}</StyledCode>
    </pre>
  )
}
