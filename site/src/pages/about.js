import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'

import { About } from '~/views/About'

/**
 * Ideas:
 *
 * Welp, here I am, blogging. I am a blogger. I blog. I plan to use this blog primarily to talk to myself. Maybe, hopefully (probably not) one day someone will actually read this.
 *
 * "The details of my life are quite inconsequential... oh, very well, where do I begin?"
 *
 * I have a dog who I like to scratch behind the ears. I'm pretty sure he digs it too.
 *
 * So long, and thanks for all the fish
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
