import React from 'react';

import { useTheme } from '@hooks/useTheme';

const colors = {
  black: '#21222a',
  dark: '#30323d',
  white: '#f2f2f2',
  blue: '#3f3d56',
  green: '#a8c256',
  red: '#ea676c',
};

const baseTheme = {
  colors,
  font: {
    size: '18px',
    mono: `'Roboto Mono', monospace`,
    system: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
  },
};

const lightTheme = {
  ...baseTheme,
  body: colors.white,
  text: colors.blue,
};

const darkTheme = {
  ...baseTheme,
  body: colors.blue,
  text: colors.white,
};

const ThemeContext = React.createContext();

export const Theme = {
  Context: ThemeContext,
  Consumer: ThemeContext.Consumer,
  Provider: ({ children }) => {
    const [theme, setTheme] = useTheme();

    const toggleTheme = (checked) => setTheme(checked ? 'dark' : 'light');

    const value = {
      styledTheme: theme === 'dark' ? darkTheme : lightTheme,
      theme,
      toggleTheme,
    };

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
  },
};
