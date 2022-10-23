import React from 'react'

import * as S from './Carousel.style'

export const Carousel = ({ children, images, speed = 10000 }) => {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => setIndex(index === images.length - 1 ? 0 : index + 1), speed)

    return () => clearInterval(interval)
  }, [index, images])

  const next = () => setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  const prev = () => setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))

  return (
    <S.Container>
      <S.Button title="<" type="button" left onClick={prev} />
      {children({ image: images[index] })}
      <S.Button title=">" type="button" right onClick={next} />
      <S.Track>
        {images.map((_, idx) => (
          <S.TrackButton key={idx} active={idx === index} onClick={() => setIndex(idx)} />
        ))}
      </S.Track>
    </S.Container>
  )
}
