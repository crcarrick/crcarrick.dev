import { localFetch } from '~/lib/fetch'
import { type Project, type ProjectAsset } from '~/types'

type ProjectProps = {
  readonly params: {
    readonly slug: string
  }
}

type ProjectsJSONResponse = {
  readonly projects: Project[]
}

type ProjectJSONResponse = {
  readonly assets: ProjectAsset[]
}

export async function generateStaticParams() {
  const response = await localFetch(`/api/project`)
  const { projects }: ProjectsJSONResponse = await response.json()

  return projects.map(({ slug }) => {
    slug
  })
}

export default async function ProjectPage({ params }: ProjectProps) {
  const response = await localFetch(`/api/project/${params.slug}`)

  if (!response.ok) throw new Error('Error fetching project')

  const { assets }: ProjectJSONResponse = await response.json()

  return (
    <pre>
      <code>{JSON.stringify(assets, null, 2)}</code>
    </pre>
  )
}
