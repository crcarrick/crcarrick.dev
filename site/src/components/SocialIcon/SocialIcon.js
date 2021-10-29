import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import * as S from './style';

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

  let Component;
  let link;

  switch (type) {
    case 'github':
      Component = S.Github;
      link = `https://github.com/${github}`;
      break;

    case 'linkedin':
      Component = S.LinkedIn;
      link = `https://linkedin.com/in/${linkedin}`;
      break;

    case 'spotify':
      Component = S.Spotify;
      link = `https://open.spotify.com/user/${spotify}`;
      break;

    case 'twitch':
      Component = S.Twitch;
      link = `https://twitch.tv/${twitch}`;
      break;

    case 'twitter':
      Component = S.Twitter;
      link = `https://twitter.com/${twitter}`;
      break;

    default:
      return null;
  }

  return (
    <S.SocialLink to={link}>
      <Component />
    </S.SocialLink>
  );
};
