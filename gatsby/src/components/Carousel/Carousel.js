import React from 'react'

import * as S from './Carousel.style'

export const Carousel = ({ children, images, speed = 10000 }) => {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => setIndex(index === images.length - 1 ? 0 : index + 1), speed)

    return () => clearInterval(interval)
  }, [index, images])

  return (
    <S.Container>
      {children({ image: images[index] })}
      <S.Track>
        {images.map((_, idx) => (
          <S.TrackButton key={idx} active={index === idx} onClick={() => setIndex(idx)} />
        ))}
      </S.Track>
    </S.Container>
  )
}
