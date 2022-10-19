import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import formatDistance from 'date-fns/formatDistance'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import template from 'lodash/template'

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

  const bioTemplate = template(author.bio, {
    interpolate: /{{([\s\S]+?)}}/g,
  })
  const bio = bioTemplate({
    currentJob: renderToStaticMarkup(<Link href="https://www.klaviyo.com">Klaviyo</Link>),
    experience: formatDistance(new Date('11-01-2015'), new Date()),
    twitter: renderToStaticMarkup(
      <Link href={`https://twitter.com/${social.twitter}`}>{social.twitter}</Link>
    ),
  })

  return (
    <S.BioWrapper>
      <S.Photo image={getImage(profilePicture)} alt="bio picture" />
      <S.Details>
        <S.Heading style={{ display: 'flex', flexDirection: 'column', gap: `var(--space-md)` }}>
          <S.Name>About {author.name}</S.Name>
          <S.Location>Software Engineer in {author.location}</S.Location>
        </S.Heading>
        <S.Bio dangerouslySetInnerHTML={{ __html: bio }} />
      </S.Details>
    </S.BioWrapper>
  )
}
