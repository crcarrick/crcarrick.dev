import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'

import { About } from '~/views/About'

/**
 * Ideas:
 *
 * "The details of my life are quite inconsequential... oh, very well, where do I begin?"
 *
 * I have a dog who I like to scratch behind the ears. I'm pretty sure he digs it too.
 *
 */

export default function AboutPage({ location }) {
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

  return <About data={data} path={location.pathname} />
}
