import styled, { css } from 'styled-components'

import GatsbySVG from '~/assets/svg/icons/gatsby.svg'
import JavascriptSVG from '~/assets/svg/icons/javascript.svg'
import LuaSVG from '~/assets/svg/icons/lua.svg'
import MarkdownSVG from '~/assets/svg/icons/markdown.svg'
import NodeSVG from '~/assets/svg/icons/node.svg'
// import ReactSVG from '~/assets/svg/icons/react.svg';
import ReduxSVG from '~/assets/svg/icons/redux.svg'

const style = css`
  width: 40px;
  height: 40px;
`

export const Gatsby = styled(GatsbySVG)`
  ${style}
`
export const Javascript = styled(JavascriptSVG)`
  ${style}
`
export const Lua = styled(LuaSVG)`
  ${style}
`
export const Markdown = styled(MarkdownSVG)`
  ${style}
`
export const Node = styled(NodeSVG)`
  ${style}
`
// export const ReactIcon = styled(ReactSVG)``;
export const Redux = styled(ReduxSVG)`
  ${style}
`
