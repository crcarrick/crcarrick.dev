import React, { Fragment } from 'react';

import { SocialIcon } from '@components';

import * as S from './style';

export const Footer = () => {
  return (
    <Fragment>
      <S.Border />
      <S.Footer>
        <S.List>
          <S.ListItem>
            <SocialIcon type="github" />
          </S.ListItem>
          <S.ListItem>
            <SocialIcon type="linkedin" />
          </S.ListItem>
          <S.ListItem>
            <SocialIcon type="spotify" />
          </S.ListItem>
          <S.ListItem>
            <SocialIcon type="twitch" />
          </S.ListItem>
          <S.ListItem>
            <SocialIcon type="twitter" />
          </S.ListItem>
        </S.List>
      </S.Footer>
    </Fragment>
  );
};
