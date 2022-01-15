import React from 'react'

import { FourOhFour } from '~/views/FourOhFour'

export default function FourOhFourPage({ location }) {
  return <FourOhFour path={location.pathname} />
}
