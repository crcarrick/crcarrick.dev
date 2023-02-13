import { type NextApiRequest, type NextApiResponse } from 'next'

import { getProjects } from '~/lib/projects'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const projects = await getProjects()

    return res.status(200).json({ projects })
  } catch (err) {
    return res.status(500).send('Something went wrong')
  }
}
