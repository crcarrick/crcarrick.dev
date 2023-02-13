import { type NextApiRequest, type NextApiResponse } from 'next'

import { getProjects } from '~/lib/projects'
import { type Project } from '~/types'

type JSONResponse = {
  readonly error?: string | Error
  readonly projects?: Project[]
}

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<JSONResponse>
) {
  try {
    const projects = await getProjects()

    return res.status(200).json({ projects })
  } catch (err) {
    console.error(err)

    return res.status(500).json({ error: 'Something went wrong' })
  }
}
