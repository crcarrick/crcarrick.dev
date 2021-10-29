import styled from 'styled-components';

import GithubSVG from '@assets/svg/social/github__square.svg';
import LinkedInSVG from '@assets/svg/social/linkedin__square.svg';
import SpotifySVG from '@assets/svg/social/spotify__square.svg';
import TwitchSVG from '@assets/svg/social/twitch__square.svg';
import TwitterSVG from '@assets/svg/social/twitter__square.svg';

const rect = `
  & rect {
    fill: var(--red)
  }
`;

const style = `
  width: 30px;
  height: 30px;

  &:hover {
    ${rect}
  }

  & rect {
    transition: var(--transition);
    fill: var(--blue);
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
  &:focus-visible {
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
