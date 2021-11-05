import { useLayoutEffect, useState } from 'react';

import Typography from 'typography';
import CodePlugin from 'typography-plugin-code';

import { useSize } from '@hooks/useSize';
import { size as breakpointSize } from '@utils/mixins';

const baseConfig = {
  headerFontFamily: ['Roboto Slab', 'sans-serif'],
  bodyFontFamily: ['Roboto', 'sans-serif'],
  baseFontSize: 16,
  baseLineHiehgt: 1.5,
  scaleRatio: 3,
  googleFonts: [
    {
      name: 'Oswald',
      styles: ['400', '700'],
    },
    {
      name: 'Open Sans',
      styles: ['400', '700'],
    },
    {
      name: 'Roboto Mono',
      styles: ['400', '600'],
    },
  ],
  plugins: [new CodePlugin()],
};

const initialTypography = new Typography(baseConfig);

export const useTypography = () => {
  const [currentTypography, setCurrentTypography] = useState(initialTypography);
  const size = useSize();

  const setTypography = (config = baseConfig) => {
    const typography = new Typography(config);

    const css = typography.toString();

    setCurrentTypography({ ...typography, css });
  };

  useLayoutEffect(() => {
    const responsiveConfig = {};

    if (size === breakpointSize.md) {
      responsiveConfig.baseFontSize = 18;
      responsiveConfig.baseLineHeight = 1.625;
    } else if (size === breakpointSize.lg) {
      responsiveConfig.baseFontSize = 20;
      responsiveConfig.baseLineHeight = 1.75;
    }

    setTypography({
      ...baseConfig,
      ...responsiveConfig,
    });
  }, [size]);

  return currentTypography;
};
