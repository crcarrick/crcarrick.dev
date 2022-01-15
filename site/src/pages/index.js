import React from 'react'

import { Home } from '~/views/Home'

export default function HomePage({ location }) {
  return <Home path={location.pathname} />
}
