import styled, { css } from 'styled-components'

import DevToSVG from '~/assets/svg/social/devto__square.svg'
import GithubSVG from '~/assets/svg/social/github__square.svg'
import LinkedInSVG from '~/assets/svg/social/linkedin__square.svg'
import SpotifySVG from '~/assets/svg/social/spotify__square.svg'
import TwitchSVG from '~/assets/svg/social/twitch__square.svg'
import TwitterSVG from '~/assets/svg/social/twitter__square.svg'

const rect = css`
  & rect {
    fill: var(--color-primary);
  }
`

const style = css`
  width: 30px;
  height: 30px;

  & rect {
    fill: var(--color-dark);
  }

  &:active,
  &:hover,
  &:focus {
    ${rect}
  }
`

export const DevToIcon = styled(DevToSVG)`
  ${style}
`
export const GithubIcon = styled(GithubSVG)`
  ${style}
`
export const LinkedInIcon = styled(LinkedInSVG)`
  ${style}
`
export const SpotifyIcon = styled(SpotifySVG)`
  ${style}
`
export const TwitchIcon = styled(TwitchSVG)`
  ${style}
`
export const TwitterIcon = styled(TwitterSVG)`
  ${style}
`

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  &:active,
  &:hover,
  &:focus {
    outline: none;

    ${DevToIcon} {
      ${rect}
    }
    ${GithubIcon} {
      ${rect}
    }
    ${LinkedInIcon} {
      ${rect}
    }
    ${SpotifyIcon} {
      ${rect}
    }
    ${TwitchIcon} {
      ${rect}
    }
    ${TwitterIcon} {
      ${rect}
    }
  }
`
