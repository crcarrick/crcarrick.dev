import React, { Fragment } from 'react'

import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { Button } from '~/Button'
import { Callout } from '~/Callout'
import { Code, CodeWrapper } from '~/Code'
import { InlineCode } from '~/InlineCode'
import { Link } from '~/Link'
import { GlobalStyle } from '~/utils/style'
import { Theme } from '~/utils/theme'
import { Typography } from '~/utils/typography'

const shortCodes = {
  a: Link,
  button: Button,
  code: Code,
  Callout: Callout,
  inlineCode: InlineCode,
  pre: CodeWrapper,
}

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
  )
}

export const wrapPageElement = ({ element }) => (
  <Typography.Consumer>
    {(typography) => (
      <Fragment>
        <GlobalStyle typography={typography} />
        {element}
      </Fragment>
    )}
  </Typography.Consumer>
)
