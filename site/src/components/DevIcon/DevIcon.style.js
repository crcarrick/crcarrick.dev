import styled, { css } from 'styled-components';

import GatsbySVG from '@assets/svg/icons/gatsby.svg';
// import ReactSVG from '@assets/svg/icons/react.svg';
import ReduxSVG from '@assets/svg/icons/redux.svg';
import StyledComponentsSVG from '@assets/svg/icons/styled-components.svg';
// import WoWSVG from '@assets/svg/icons/wow.svg';

const style = css`
  width: 40px;
  height: 40px;
  border-radius: 0;
`;

export const GatsbyIcon = styled(GatsbySVG)`
  ${style}
`;
// export const ReactIcon = styled(ReactSVG)`
//   ${style}
// `;
export const ReduxIcon = styled(ReduxSVG)`
  ${style}
`;
export const StyledComponentsIcon = styled(StyledComponentsSVG)`
  ${style}
`;
// export const WoWIcon = styled(WoWSVG)`
//   ${style}
// `;
