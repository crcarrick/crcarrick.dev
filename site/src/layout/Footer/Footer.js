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
            activeBoxShadow={`0 0 2px 3px ${context.styledTheme.colors.red}`}
            onColor={context.styledTheme.colors.text}
            onHandleColor={context.styledTheme.colors.body}
            offColor={context.styledTheme.colors.text}
            offHandleColor={context.styledTheme.colors.body}
            handleDiameter={20}
          />
        )}
      </S.Footer>
    </Fragment>
  );
};
