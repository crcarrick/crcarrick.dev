import React from 'react';

import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import * as Components from '@components';
import { GlobalStyle } from '@style/global.style';
import { Theme } from '@style/theme';

const { CodeBlock, ...RestComponents } = Components;

const shortCodes = {
  ...RestComponents,
  code: CodeBlock,
  pre: (props) => <div {...props} />,
};

export const wrapRootElement = ({ element }) => (
  <Theme.Provider>
    <Theme.Consumer>
      {({ styledTheme }) => (
        <StyledThemeProvider theme={styledTheme}>
          <MDXProvider components={shortCodes}>
            <GlobalStyle />
            {element}
          </MDXProvider>
        </StyledThemeProvider>
      )}
    </Theme.Consumer>
  </Theme.Provider>
);
