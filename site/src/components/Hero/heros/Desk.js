import styled from 'styled-components'

import SVG from '~/assets/svg/hero/desk.svg'
import { transition } from '~/utils/mixins'

export default styled(SVG)`
  max-width: 100%;
  height: auto;
  [fill] {
    transition: ${transition('fill')};
  }
`
