import React, { Fragment } from 'react';

import { MDXProvider } from '@mdx-js/react';
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { GlobalStyle } from '@style/global.style';
import { Theme } from '@style/theme';

import { Button } from '@components/Button';
import { Callout } from '@components/Callout';
import { Code } from '@components/Code';
import { InlineCode } from '@components/InlineCode';
import { Link } from '@components/Link';

// Highlighting / numbering fix for smaller screen (https://www.gatsbyjs.com/plugins/gatsby-remark-prismjs/#optional-add-line-numbering)
export const Pre = styled.div`
  background-color: #282a36; //-- dracula bg .. overwriting for now
  background-color: var(--dark);
  overflow: auto;
  margin: 2rem 0;

  pre[class*='language-'] {
    background-color: transparent;
    float: left;
    min-width: 100%;
  }
`;

const shortCodes = {
  a: Link,
  button: Button,
  code: Code,
  Callout: Callout,
  inlineCode: InlineCode,
  pre: Pre,
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
