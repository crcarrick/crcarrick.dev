import React from 'react'

import { useLazyRender } from '~/hooks/useLazyRender'

import * as S from './Video.style'

export const Video = ({ width = 600, height = 450, title = 'YouTube video player', ytId }) => {
  const { ref, shouldRender } = useLazyRender()

  return (
    <S.VideoWrapper ref={ref} videoWidth={width} videoHeight={height}>
      {shouldRender ? (
        <S.Video
          allowFullScreen={true}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          src={`https://www.youtube.com/embed/${ytId}?controls=0`}
          title={title}
        />
      ) : (
        <S.Placeholder width={width} height={height} />
      )}
    </S.VideoWrapper>
  )
}
