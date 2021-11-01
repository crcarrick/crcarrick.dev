import React from 'react';

import { useTheme } from '@hooks/useTheme';
import { adjust } from '@utils/mixins';

const colors = {
  black: '#21222a',
  dark: '#30323d',
  white: '#f2f2f2',
  red: '#ea676c',
  blue: '#3f3d56',
  green: '#57b894',
  yellow: '#edd83d',
  purple: '#947bd3',
  teal: '#08b6ce',
  pink: '#ff79c6',
};

const baseTheme = {
  colors,
  font: {
    mono: `'Roboto Mono', monospace`,
    system: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
  },
};

const lightTheme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    body: colors.white,
    text: adjust(colors.blue, -5),
  },
};

const darkTheme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    body: colors.blue,
    text: adjust(colors.white, 10),
  },
};

const ThemeContext = React.createContext();

export const Theme = {
  Context: ThemeContext,
  Consumer: ThemeContext.Consumer,
  Provider: ({ children }) => {
    const [theme, setTheme] = useTheme();

    const toggleTheme = (checked) => setTheme(checked ? 'dark' : 'light');
    const styledTheme = Object.assign(theme === 'dark' ? darkTheme : lightTheme, {
      name: theme,
    });

    const value = {
      styledTheme,
      theme,
      toggleTheme,
    };

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
  },
};
