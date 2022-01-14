import React from 'react'

import * as S from './Video.style'

export const Video = ({ src, width = 600, height = 450, title = 'YouTube video player' }) => {
  return (
    <S.Video
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen={true}
      frameBorder="0"
      src={src}
      title={title}
      width={width}
      height={height}
    />
  )
}
