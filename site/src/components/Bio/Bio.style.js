import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

import { breakpoint } from '~/utils/mixins'

export const BioWrapper = styled.section`
  display: none;

  ${breakpoint.md} {
    background-color: var(--bg-card);
    margin-top: var(--space-xl);
    padding: var(--space-xl);
    display: flex;
    align-items: flex-start;
    gap: var(--space-lg);
  }
`

export const Photo = styled(GatsbyImage)`
  border-radius: var(--border-radius);
  min-width: 100px;
  width: 100px;
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
`
export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
`

export const Name = styled.h3`
  margin-bottom: 0;
`

export const Location = styled.h4`
  margin-bottom: 0;
  opacity: 0.8;
`

export const Bio = styled.p`
  margin-bottom: 0;
  font-size: var(--font-size-sm);
`
