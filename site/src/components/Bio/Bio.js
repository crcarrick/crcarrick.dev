import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

import { Link } from '~/components/Link'

import * as S from './Bio.style'

export function Bio() {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            bio
            location
          }
          social {
            twitter
          }
        }
      }

      profilePicture: file(name: { eq: "me" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  `)

  const {
    profilePicture,
    site: {
      siteMetadata: { author, social },
    },
  } = data

  return (
    <S.BioWrapper>
      <S.Photo image={getImage(profilePicture)} alt="bio picture" />
      <S.Details>
        <S.Heading style={{ display: 'flex', flexDirection: 'column', gap: `var(--space-md)` }}>
          <S.Name>About {author.name}</S.Name>
          <S.Location>Software Engineer in {author.location}</S.Location>
        </S.Heading>
        <S.Bio>
          {author.bio} <Link href={`https://twitter.com/${social.twitter}`}>{social.twitter}</Link>
        </S.Bio>
      </S.Details>
    </S.BioWrapper>
  )
}
