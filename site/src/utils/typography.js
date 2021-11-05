import React from 'react';

import { useTypography } from '@hooks/useTypography';

const TypographyContext = React.createContext();

export const Typography = {
  Context: TypographyContext,
  Consumer: TypographyContext.Consumer,
  Provider: ({ children }) => {
    const typography = useTypography();

    return <TypographyContext.Provider value={typography}>{children}</TypographyContext.Provider>;
  },
};
