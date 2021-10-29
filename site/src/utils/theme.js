import React from 'react';

import { useColorTheme } from '@hooks';

const ThemeContext = React.createContext();

export const Theme = {
  Context: ThemeContext,
  Consumer: ThemeContext.Consumer,
  Provider: ({ children }) => {
    const theme = useColorTheme();

    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
  },
};
