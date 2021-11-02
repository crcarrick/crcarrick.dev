import { useContext } from 'react';

import { Theme } from '@utils/theme';

export const useTheme = () => {
  const context = useContext(Theme.Context);

  return context;
};
