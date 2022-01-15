import React from 'react'

import { Hero } from '~/components/Hero'
import { Layout } from '~/views/Layout'

export const Home = ({ path }) => (
  <Layout path={path} seoTitle="Home">
    <Hero type="desk" />
  </Layout>
)
