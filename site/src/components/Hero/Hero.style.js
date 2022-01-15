import styled, { css } from 'styled-components'


import ConstructionSVG from '~/assets/svg/hero/construction.svg'
import DeskSVG from '~/assets/svg/hero/desk.svg'
import FiveHundredSVG from '~/assets/svg/hero/fivehundred.svg'
import FourOhFourSVG from '~/assets/svg/hero/fourohfour.svg'
import { transition } from '~/utils/mixins'

export const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`

const style = css`
  max-width: 100%;
  height: auto;
`

export const ConstructionHero = styled(ConstructionSVG)`
  ${style}
`
export const DeskHero = styled(DeskSVG)`
  ${style}

  [fill] {
    transition: ${transition('fill')};
  }
`
export const FourOhFourHero = styled(FourOhFourSVG)`
  ${style}
`
export const FiveHundredHero = styled(FiveHundredSVG)`
  ${style}
`
