import React, { Fragment } from 'react';

import { SocialIcon } from '@components/SocialIcon';
import { useTheme } from '@hooks/useTheme';

import * as S from './Footer.style';

export const Footer = () => {
  const theme = useTheme();

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

        {/* TODO: Is there some way I can just use my css variables here instead of the context??? */}
        {theme && (
          <S.Toggle
            aria-label="Toggle dark mode on or off"
            checked={theme.mode.name === 'dark'}
            onChange={theme.mode.toggle}
            checkedIcon={<S.Sun />}
            uncheckedIcon={<S.Moon />}
            activeBoxShadow={`0 0 2px 3px ${theme.color.primary}`}
            onColor={theme.color.text.toString()}
            onHandleColor={theme.color.body.toString()}
            offColor={theme.color.text.toString()}
            offHandleColor={theme.color.body.toString()}
            handleDiameter={20}
          />
        )}
      </S.Footer>
    </Fragment>
  );
};
