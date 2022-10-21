import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'

import { Projects } from '~/views/Projects'

export default function ProjectsPage({ location }) {
  const data = useStaticQuery(graphql`
    query ProjectsPage {
      projects: allMdx(
        filter: {
          fileAbsolutePath: { glob: "/**/projects/**" }
          frontmatter: { created: { ne: "1970-01-01T00:00:00.000Z" } }
        }
      ) {
        nodes {
          id
          slug
          body
          frontmatter {
            meta
            repo
            title
            description
            icon {
              publicURL
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
              }
            }
            screenshots {
              publicURL
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
              }
            }
          }
        }
      }
    }
  `)

  return <Projects path={location.pathname} projects={data.projects.nodes} />
}
