import React from 'react'

import loadable from '@loadable/component'
import { graphql, useStaticQuery } from 'gatsby'

import { SocialLink } from './SocialIcon.style'

const icons = {
  devto: 'DevToIcon',
  github: 'GithubIcon',
  linkedin: 'LinkedInIcon',
  spotify: 'SpotifyIcon',
  twitch: 'TwitchIcon',
  twitter: 'TwitterIcon',
}

export const SocialIcon = ({ type }) => {
  const data = useStaticQuery(graphql`
    query SocialIcon {
      site {
        siteMetadata {
          social {
            devto
            github
            linkedin
            spotify
            twitter
          }
        }
      }
    }
  `)

  const { devto, github, linkedin, spotify, twitch, twitter } = data.site.siteMetadata.social

  if (!icons[type]) return null

  const Icon = loadable(() => import('./SocialIcon.style'), {
    resolveComponent: (components) => components[icons[type]],
  })

  const links = {
    devto: `https://dev.to/${devto}`,
    github: `https://github.com/${github}`,
    linkedin: `https://linkedin.com/in/${linkedin}`,
    spotify: `https://open.spotify.com/user/${spotify}`,
    twitch: `https://twitch.tv/${twitch}`,
    twitter: `https://twitter.com/${twitter}`,
  }

  return (
    <SocialLink href={links[type]}>
      <Icon />
    </SocialLink>
  )
}
