import type { GetStaticPropsResult } from 'next'
import Link from 'next/link'

import { getProjects } from '~/lib/projects'

type Projects = Awaited<ReturnType<typeof getProjects>>

type ProjectsProps = {
  readonly projects: Projects
}

export async function getStaticProps(): Promise<GetStaticPropsResult<ProjectsProps>> {
  const projects = await getProjects()

  return {
    props: {
      projects,
    },
  }
}

export default function Posts({ projects }: ProjectsProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
      {projects.map(({ slug, frontmatter: { title } }) => (
        <Link key={slug} href={`/projects/${slug}`}>
          {title}
        </Link>
      ))}
    </div>
  )
}
