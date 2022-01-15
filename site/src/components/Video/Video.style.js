import styled from 'styled-components'

export const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: ${({ videoWidth, videoHeight }) => (videoHeight / videoWidth) * 100}%;
  height: 0;
`

export const Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
