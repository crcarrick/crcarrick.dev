import type { GetStaticPropsResult, GetStaticPropsContext } from 'next'
import { getProjectBySlug } from '~/lib/projects'

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

export default function Project({ project }: ProjectProps) {
  return (
    <pre>
      <code>{JSON.stringify(project, null, 2)}</code>
    </pre>
  )
}
