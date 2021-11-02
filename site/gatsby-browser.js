import React, { Fragment } from 'react';

import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { Button } from '@components/Button';
import { Callout } from '@components/Callout';
import { Code, CodeWrapper } from '@components/Code';
import { InlineCode } from '@components/InlineCode';
import { Link } from '@components/Link';
import { Theme } from '@utils/theme';

import { GlobalStyle } from '@style/global.style';

const shortCodes = {
  a: Link,
  button: Button,
  code: Code,
  Callout: Callout,
  inlineCode: InlineCode,
  pre: CodeWrapper,
};

export const wrapRootElement = ({ element }) => (
  <Theme.Provider>
    <Theme.Consumer>
      {(theme) => (
        <StyledThemeProvider theme={theme}>
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
