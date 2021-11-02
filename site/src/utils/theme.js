import React from 'react';

import { useMode } from '@hooks/useMode';
import { adjust } from '@utils/mixins';
import { scale } from '@utils/typography';

const color = {
  // base colors
  red: '#ea676c',
  blue: '#3f3d56',
  green: '#57b894',
  yellow: '#edd83d',
  purple: '#947bd3',
  pink: '#ff79c6',
  black: '#21222a',
  white: '#f2f2f2',

  // semantic colors
  dark: '#30323d',
  body: null,
  text: null,
  primary: null,
  danger: '#ea676c',
  warning: '#edd83d',
  info: null,
  success: '#57b894',
  dracula: '#282a36',
};

const baseTheme = {
  color,
  typography: {
    heading: {
      family: 'Oswald, sans-serif',
    },
    body: {
      family: 'Roboto, sans-serif',
    },
    code: {
      family: `'Roboto Mono', Consolas, Monaco, monospace`,
      size: scale(-1 / 4),
      lineHeight: 1.5,
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
    text: adjust(color.blue, -5),
    primary: color.red,
    info: color.blue,
  },
};

const darkTheme = {
  ...baseTheme,
  color: {
    ...baseTheme.color,
    body: color.blue,
    text: adjust(color.white, 10),
    primary: color.purple,
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
