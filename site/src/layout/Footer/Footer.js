import React, { Fragment, useContext } from 'react';

import { SocialIcon } from '@components';
import { Theme } from '@style/theme';

import * as S from './style';

export const Footer = () => {
  const context = useContext(Theme.Context);

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

        {context && (
          <S.Toggle
            aria-label="Toggle dark mode on or off"
            checked={context.theme === 'dark'}
            onChange={context.toggleTheme}
            checkedIcon={<S.Sun />}
            uncheckedIcon={<S.Moon />}
            onColor={context.styledTheme.text}
            onHandleColor={context.styledTheme.body}
            offColor={context.styledTheme.text}
            offHandleColor={context.styledTheme.body}
            handleDiameter={20}
          />
        )}
      </S.Footer>
    </Fragment>
  );
};
