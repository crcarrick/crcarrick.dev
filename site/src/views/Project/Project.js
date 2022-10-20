import React from 'react'

import { MDXRenderer } from 'gatsby-plugin-mdx'

import { Layout } from '~/views/Layout'

import * as S from './Project.style'

export const Project = ({ path, project }) => (
  <Layout content={project} path={path}>
    <S.Project>
      <MDXRenderer>{project.body}</MDXRenderer>
    </S.Project>
  </Layout>
)
