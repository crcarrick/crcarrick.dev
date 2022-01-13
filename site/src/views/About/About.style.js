import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'


import { breakpoint } from '~/utils/mixins'

export const Article = styled.article`
  display: flex;
  flex: 1;
  flex-direction: column;

  ${breakpoint.md} {
    background-color: var(--bg-card);
    padding: var(--space-xl);
  }
`

export const Image = styled(GatsbyImage)`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  margin: var(--space-lg);
  /* margin-bottom: var(--space-sm); */

  &:nth-child(odd) {
    float: left;
  }

  &:nth-child(even) {
    float: right;
  }

  ${breakpoint.lg} {
    width: 150px;
    height: 150px;
  }
`
