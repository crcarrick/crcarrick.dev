import React, { useState } from 'react';

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
    const mql = window && window.matchMedia('');

    const [theme, setTheme] = useState(mql.matches ? 'dark' : 'light');

    const toggleTheme = (checked) => setTheme(checked ? 'dark' : 'light');

    return (
      <ThemeContext.Provider
        value={{ styledTheme: theme === 'dark' ? darkTheme : lightTheme, theme, toggleTheme }}
      >
        {children}
      </ThemeContext.Provider>
    );
  },
};
