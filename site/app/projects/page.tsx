import Link from 'next/link'

import { localFetch } from '~/lib/fetch'
import { Project } from '~/types'

type JSONResponse = {
  readonly projects: Project[]
}

export default async function ProjectsPage() {
  const response = await localFetch('/api/project')

  if (!response.ok) throw new Error('Error fetching projects')

  const { projects }: JSONResponse = await response.json()

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
