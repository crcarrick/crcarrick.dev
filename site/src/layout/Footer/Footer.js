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
          <li>
            <SocialIcon type="github" />
          </li>
          <li>
            <SocialIcon type="linkedin" />
          </li>
          <li>
            <SocialIcon type="spotify" />
          </li>
          {/* <li>
            <SocialIcon type="twitch" />
          </li> */}
          <li>
            <SocialIcon type="twitter" />
          </li>
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
