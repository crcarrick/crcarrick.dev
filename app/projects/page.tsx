import type { Metadata } from 'next'

import { ProjectCard } from '@/components/project-card'
import { getAllProjects } from '@/lib/content'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Projects',
}

export default function ProjectsPage() {
  const projects = getAllProjects()

  return (
    <div className="py-12">
      <h1 className="mb-8 font-heading text-3xl font-bold">Projects</h1>
      <div className="space-y-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  )
}
