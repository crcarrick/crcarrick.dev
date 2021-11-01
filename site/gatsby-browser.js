import React, { Fragment } from 'react';

import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import * as Components from '@components';
import { GlobalStyle } from '@style/global.style';
import { Theme } from '@style/theme';

const { Code, CodeHighlight, InlineCode, Link, ...RestComponents } = Components;

const shortCodes = {
  ...RestComponents,
  a: Link,
  code: Code,
  inlineCode: InlineCode,
  pre: CodeHighlight,
};

export const wrapRootElement = ({ element }) => (
  <Theme.Provider>
    <Theme.Consumer>
      {({ styledTheme }) => (
        <StyledThemeProvider theme={styledTheme}>
          <MDXProvider components={shortCodes}>{element}</MDXProvider>
        </StyledThemeProvider>
      )}
    </Theme.Consumer>
  </Theme.Provider>
);

export const wrapPageElement = ({ element }) => (
  <Fragment>
    <GlobalStyle />
    {element}
  </Fragment>
);
