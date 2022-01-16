import React from 'react'

import * as S from './Video.style'

export const Video = ({ width = 600, height = 450, title = 'YouTube video player', ytId }) => {
  const [inView, setInView] = React.useState(false)

  const videoWrapperRef = (element) => {
    if (window && 'IntersectionObserver' in window && element != null) {
      function observe([{ isIntersecting }]) {
        if (isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      }

      const observer = new IntersectionObserver(observe, {
        rootMargin: '200px 0px',
        threshold: 0.1,
      })

      observer.observe(element)
    }
  }

  return (
    <S.VideoWrapper ref={videoWrapperRef} videoWidth={width} videoHeight={height}>
      {inView ? (
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
