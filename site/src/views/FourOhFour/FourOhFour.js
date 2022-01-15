import React from 'react'

import { Hero } from '~/components/Hero'
import { Layout } from '~/views/Layout'

export const FourOhFour = ({ path }) => (
  <Layout path={path} seoTitle="404">
    <Hero type="404" />
  </Layout>
)
