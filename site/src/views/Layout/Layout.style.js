import styled from 'styled-components'

import { breakpoint } from '~/utils/mixins'

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60ch;
  min-height: 100vh;
  min-height: -moz-available-;
  min-height: -webkit-fill-available-;
  min-height: fill-available;
  margin: 0 auto;
  padding: 0 var(--space-lg);

  ${breakpoint.lg} {
    padding: 0;
  }
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
`
