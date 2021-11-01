import styled, { css } from 'styled-components';

import { transition } from '@utils/mixins';

import GithubSVG from '@assets/svg/social/github__square.svg';
import LinkedInSVG from '@assets/svg/social/linkedin__square.svg';
import SpotifySVG from '@assets/svg/social/spotify__square.svg';
import TwitchSVG from '@assets/svg/social/twitch__square.svg';
import TwitterSVG from '@assets/svg/social/twitter__square.svg';

const rect = css`
  & rect {
    fill: var(--primary);
  }
`;

const style = css`
  width: 30px;
  height: 30px;

  &:active,
  &:hover,
  &:focus {
    ${rect}
  }

  & rect {
    fill: var(--blue);
    transition: ${transition('fill')};
  }
`;

export const Github = styled(GithubSVG)`
  ${style}
`;
export const LinkedIn = styled(LinkedInSVG)`
  ${style}
`;
export const Spotify = styled(SpotifySVG)`
  ${style}
`;
export const Twitch = styled(TwitchSVG)`
  ${style}
`;
export const Twitter = styled(TwitterSVG)`
  ${style}
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  &:active,
  &:hover,
  &:focus {
    outline: none;

    ${Github} {
      ${rect}
    }
    ${LinkedIn} {
      ${rect}
    }
    ${Spotify} {
      ${rect}
    }
    ${Twitch} {
      ${rect}
    }
    ${Twitter} {
      ${rect}
    }
  }
`;
