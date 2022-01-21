import React from 'react'
import { hydrate, render } from 'react-dom'

import { loadableReady } from '@loadable/component'
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

import '~/utils/fonts'

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

export const replaceHydrateFunction = () => (element, container, callback) => {
  loadableReady(() => {
    const renderFn = process.env.BUILD_STAGE.includes('develop') ? render : hydrate

    renderFn(element, container, callback)
  })
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
