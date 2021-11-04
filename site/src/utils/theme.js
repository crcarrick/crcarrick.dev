import React from 'react';

import { useMode } from '@hooks/useMode';
import { Color } from '@utils/color';
import { scale } from '@utils/typography';

const color = {
  // base colors
  red: Color.from('#ea676c'),
  blue: Color.from('#3f3d56'),
  green: Color.from('#57b894'),
  yellow: Color.from('#edd83d'),
  purple: Color.from('#947bd3'),
  pink: Color.from('#ff79c6'),
  black: Color.from('#21222a'),
  white: Color.from('#f2f2f2'),

  // semantic colors
  dark: Color.from('#30323d'),
  danger: Color.from('#ea676c'),
  warning: Color.from('#edd83d'),
  success: Color.from('#57b894'),
  body: null,
  text: null,
  primary: null,
  accent: null,
  info: null,
};

const baseTheme = {
  color,
  typography: {
    heading: {
      family: 'Oswald, sans-serif',
    },
    body: {
      family: `'Open Sans', sans-serif`,
    },
    code: {
      family: `'Roboto Mono', Consolas, Monaco, monospace`,
      size: scale(-(1 / 4)),
      lineHeight: 1.6,
      weight: 600,
      get font() {
        return `${this.weight} ${this.size.fontSize} / ${this.lineHeight} ${this.family}`;
      },
    },
    system: {
      family: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
    },
  },
};

const lightTheme = {
  ...baseTheme,
  color: {
    ...baseTheme.color,
    body: color.white,
    text: color.dark,
    primary: color.red,
    accent: color.dark,
    info: color.blue,
  },
};

const darkText = color.white.lighten(10);

console.log(darkText);

const darkTheme = {
  ...baseTheme,
  color: {
    ...baseTheme.color,
    body: color.black,
    text: color.white.lighten(10),
    primary: color.purple,
    accent: color.white,
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
