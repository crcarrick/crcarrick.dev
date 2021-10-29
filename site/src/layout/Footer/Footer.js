import React, { Fragment, useContext } from 'react';

import { SocialIcon } from '@components';
import { Theme } from '@style/theme';

import * as S from './style';

export const Footer = () => {
  const { styledTheme, theme, toggleTheme } = useContext(Theme.Context);

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
          {/* <S.ListItem>
            <SocialIcon type="twitch" />
          </S.ListItem> */}
          <S.ListItem>
            <SocialIcon type="twitter" />
          </S.ListItem>
        </S.List>

        <S.Toggle
          aria-label="Toggle dark mode on or off"
          checked={theme === 'dark'}
          onChange={toggleTheme}
          checkedIcon={<S.Sun />}
          uncheckedIcon={<S.Moon />}
          onColor={styledTheme.text}
          onHandleColor={styledTheme.body}
          offColor={styledTheme.text}
          offHandleColor={styledTheme.body}
          handleDiameter={20}
        />
      </S.Footer>
    </Fragment>
  );
};
