import React from 'react';

import { useMode } from '@hooks/useMode';
import { Color } from '@utils/color';

const color = {
  red: Color.from('#ea676c'),
  blue: Color.from('#3f3d56'),
  green: Color.from('#57b894'),
  yellow: Color.from('#edd83d'),
  purple: Color.from('#947bd3'),
  pink: Color.from('#ff79c6'),
  dark: Color.from('#30323d'),
  black: Color.from('#21222a'),
  white: Color.from('#f2f2f2'),
  trueWhite: Color.from('#ffffff'),
  trueBlack: Color.from('#000000'),
};

const baseTheme = { color };

const lightTheme = {
  ...baseTheme,
  color: {
    ...baseTheme.color,
    body: color.white,
    text: color.dark,
    primary: color.red,
    accent: color.dark,
    danger: color.red,
    warning: color.yellow,
    success: color.green,
    info: color.blue,
  },
};

const darkTheme = {
  ...baseTheme,
  color: {
    ...baseTheme.color,
    body: color.black,
    text: color.trueWhite,
    primary: color.purple,
    accent: color.white,
    danger: color.red,
    warning: color.yellow,
    success: color.green,
    info: color.purple,
  },
};

const ThemeContext = React.createContext();

export const Theme = {
  Context: ThemeContext,
  Consumer: ThemeContext.Consumer,
  Provider: ({ children }) => {
    const [mode, setMode] = useMode();

    const toggleMode = (checked) => setMode(checked ? 'dark' : 'light');
    const theme = Object.assign(mode === 'dark' ? darkTheme : lightTheme, {
      mode: {
        name: mode,
        toggle: toggleMode,
      },
    });

    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
  },
};
