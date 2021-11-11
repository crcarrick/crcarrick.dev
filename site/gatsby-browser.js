import React, { Fragment } from 'react';

import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { Button } from '@components/Button';
import { Callout } from '@components/Callout';
import { Code } from '@components/Code';
import { Link } from '@components/Link';
import { GlobalStyle } from '@utils/style';
import { Theme } from '@utils/theme';
import { Typography } from '@utils/typography';

const shortCodes = {
  a: Link,
  button: Button,
  code: Code.Block,
  Callout: Callout,
  inlineCode: Code.Inline,
  pre: Code.Pre,
};

export const wrapRootElement = ({ element }) => {
  return (
    <Typography.Provider>
      <Theme.Provider>
        <Theme.Consumer>
          {(theme) => (
            <StyledThemeProvider theme={theme}>
              <MDXProvider components={shortCodes}>{element}</MDXProvider>
            </StyledThemeProvider>
          )}
        </Theme.Consumer>
      </Theme.Provider>
    </Typography.Provider>
  );
};

export const wrapPageElement = ({ element }) => (
  <Typography.Consumer>
    {(typography) => (
      <Fragment>
        <GlobalStyle typography={typography} />
        {element}
      </Fragment>
    )}
  </Typography.Consumer>
);
