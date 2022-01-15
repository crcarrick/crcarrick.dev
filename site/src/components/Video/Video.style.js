import styled, { css } from 'styled-components'

export const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: ${({ videoWidth, videoHeight }) => (videoHeight / videoWidth) * 100}%;
  height: 0;
`

const style = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const Video = styled.iframe`
  ${style}
`

export const Placeholder = styled.img`
  ${style}
`
