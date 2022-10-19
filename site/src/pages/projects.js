import React from 'react'

import { Projects } from '~/views/Projects'

export default function ProjectsPage({ location }) {
  return <Projects path={location.pathname} />
}
