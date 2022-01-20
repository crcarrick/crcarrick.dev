import React from 'react'

import { MDXProvider } from '@mdx-js/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { Button } from '~/components/Button'
import { Callout } from '~/components/Callout'
import { Code } from '~/components/Code'
import { Link } from '~/components/Link'
import { Video } from '~/components/Video'
import { GlobalStyle } from '~/utils/style'
import { Theme } from '~/utils/theme'
import { Typography } from '~/utils/typography'

const queryClient = new QueryClient()
const shortCodes = {
  a: Link,
  button: Button,
  code: Code.Block,
  Callout: Callout,
  inlineCode: Code.Inline,
  pre: Code.Pre,
  video: Video,
}

export const wrapRootElement = ({ element }) => {
  return (
    <Typography.Provider>
      <Theme.Provider>
        <Theme.Consumer>
          {(theme) => (
            <StyledThemeProvider theme={theme}>
              <QueryClientProvider client={queryClient}>
                <MDXProvider components={shortCodes}>{element}</MDXProvider>
              </QueryClientProvider>
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
      <React.Fragment>
        <GlobalStyle typography={typography} />
        {element}
      </React.Fragment>
    )}
  </Typography.Consumer>
)
