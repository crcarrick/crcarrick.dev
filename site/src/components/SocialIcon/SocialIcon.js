import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import * as S from './SocialIcon.style';

const icons = {
  github: S.Github,
  linkedin: S.LinkedIn,
  spotify: S.Spotify,
  twitch: S.Twitch,
  twitter: S.Twitter,
};

export const SocialIcon = ({ type }) => {
  const data = useStaticQuery(graphql`
    query SocialIcon {
      site {
        siteMetadata {
          github
          linkedin
          spotify
          twitch
          twitter
        }
      }
    }
  `);

  const { github, linkedin, spotify, twitch, twitter } = data.site.siteMetadata;

  const Component = icons[type];

  if (!Component) return null;

  const links = {
    github: `https://github.com/${github}`,
    linkedin: `https://linkedin.com/in/${linkedin}`,
    spotify: `https://open.spotify.com/user/${spotify}`,
    twitch: `https://twitch.tv/${twitch}`,
    twitter: `https://twitter.com/${twitter}`,
  };

  return (
    <S.SocialLink href={links[type]}>
      <Component />
    </S.SocialLink>
  );
};
