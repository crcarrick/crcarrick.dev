import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'

import { About } from '~/views/About'

export default function AboutPage() {
  const data = useStaticQuery(graphql`
    query AboutPage {
      site {
        siteMetadata {
          description
          author {
            name
            bio
          }
          social {
            twitter
            github
            spotify
            linkedin
          }
        }
      }

      profilePicture: file(name: { eq: "me" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }

      miloPicture: file(name: { eq: "milo" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  `)

  return <About data={data} />
}