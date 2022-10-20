import React from 'react'

import { ProjectCard } from '~/components/ProjectCard'
import { Layout } from '~/views/Layout'

import * as S from './Projects.style'

export const Projects = ({ path, projects }) => (
  <Layout path={path} seoTitle="Projects">
    <S.Projects>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </S.Projects>
  </Layout>
)
