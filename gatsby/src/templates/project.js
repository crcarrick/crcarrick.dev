import React from 'react'

import { graphql } from 'gatsby'

import { Project } from '~/views/Project'

export default function ProjectTemplate({ path, data }) {
  return <Project path={path} project={data.project} />
}

export const query = graphql`
  query ProjectTemplate($id: String) {
    project: mdx(id: { eq: $id }) {
      body
      slug
    }
  }
`
