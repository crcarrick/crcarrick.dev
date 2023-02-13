import Link from 'next/link'

import { Project } from '~/types'

type JSONResponse = {
  readonly projects: Project[]
}

export default async function Projects() {
  const response = await fetch('http://localhost:3000/api/project')

  if (!response.ok) throw new Error('Error fetching projects')

  const { projects }: JSONResponse = await response.json()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
      {projects.map(({ slug, frontmatter: { title } }) => (
        <Link key={slug} href={`/blog/${slug}`}>
          {title}
        </Link>
      ))}
    </div>
  )
}
