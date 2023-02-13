import { Project } from '~/types'

type ProjectProps = {
  readonly params: {
    readonly slug: string
  }
}

type JSONResponse = {
  readonly project: Project
}

export default async function Project({ params }: ProjectProps) {
  const response = await fetch(
    `http://localhost:3000/api/project/${params.slug}`
  )

  if (!response.ok) throw new Error('Error fetching project')

  const { project }: JSONResponse = await response.json()

  return (
    <pre>
      <code>{JSON.stringify(project, null, 2)}</code>
    </pre>
  )
}
