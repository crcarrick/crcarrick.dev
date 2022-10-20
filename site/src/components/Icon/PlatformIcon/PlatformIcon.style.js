import AppleSVG from 'devicon/icons/apple/apple-original.svg'
import LinuxSVG from 'devicon/icons/linux/linux-plain.svg'
import WindowsSVG from 'devicon/icons/windows8/windows8-original.svg'
import styled, { css } from 'styled-components'

import { Button } from '~/components/Button'

const style = css`
  width: 100%;
  height: 100%;
  border-radius: 0;

  & path {
    fill: var(--color-body);
  }

  ${Button}:hover &,
  ${Button}:active &,
  ${Button}:focus & {
    & path {
      fill: var(--color-body);
    }
  }
`

export const IconWrapper = styled.span`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LinuxIcon = styled(LinuxSVG)`
  ${style}
`

export const AppleIcon = styled(AppleSVG)`
  ${style}
`

export const WindowsIcon = styled(WindowsSVG)`
  ${style}
`
