import GatsbySVG from 'devicon/icons/gatsby/gatsby-original.svg'
import JavascriptSVG from 'devicon/icons/javascript/javascript-original.svg'
import ReactSVG from 'devicon/icons/react/react-original.svg'
import ReduxSVG from 'devicon/icons/redux/redux-original.svg'
import styled, { css } from 'styled-components'

import StyledComponentsSVG from '~/assets/svg/icons/styled-components.svg'
import WeakAurasSVG from '~/assets/svg/icons/weakauras.svg'

const style = css`
  width: 100%;
  height: 100%;
  border-radius: 0;
`

export const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const GatsbyIcon = styled(GatsbySVG)`
  ${style}
`
export const JavascriptIcon = styled(JavascriptSVG)`
  ${style}
`
export const ReactIcon = styled(ReactSVG)`
  ${style}
`
export const ReduxIcon = styled(ReduxSVG)`
  ${style}
`
export const StyledComponentsIcon = styled(StyledComponentsSVG)`
  ${style}
`
export const WeakAurasIcon = styled(WeakAurasSVG)`
  ${style}
`
