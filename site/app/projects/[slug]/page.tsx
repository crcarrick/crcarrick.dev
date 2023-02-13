import { localFetch } from '~/lib/fetch'
import { ProjectAsset } from '~/types'

type ProjectProps = {
  readonly params: {
    readonly slug: string
  }
}

type JSONResponse = {
  readonly assets: ProjectAsset[]
}

export default async function ProjectPage({ params }: ProjectProps) {
  const response = await localFetch(`/api/project/${params.slug}`)

  if (!response.ok) throw new Error('Error fetching project')

  const { assets }: JSONResponse = await response.json()

  return (
    <pre>
      <code>{JSON.stringify(assets, null, 2)}</code>
    </pre>
  )
}
