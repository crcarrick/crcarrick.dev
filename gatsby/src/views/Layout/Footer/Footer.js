import React from 'react'

import { Icon } from '~/components/Icon'
import { useTheme } from '~/hooks/useTheme'

import * as S from './Footer.style'

export const Footer = () => {
  const theme = useTheme()

  return (
    <React.Fragment>
      <S.Border />
      <S.Footer>
        <S.List>
          <li>
            <Icon.Social type="github" />
          </li>
          <li>
            <Icon.Social type="linkedin" />
          </li>
          <li>
            <Icon.Social type="devto" />
          </li>
          <li>
            <Icon.Social type="twitter" />
          </li>
        </S.List>

        {/* TODO: Is there some way I can just use my css variables here instead of the context??? */}
        {theme && (
          <S.Toggle
            aria-label="Toggle dark mode on or off"
            checked={theme.isDark}
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
    </React.Fragment>
  )
}
