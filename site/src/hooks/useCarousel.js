import React from 'react'

export const useCarousel = (images, delay = 10000) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      const isLast = currentImageIndex === images.length - 1

      if (isLast) {
        setCurrentImageIndex(0)
      } else {
        setCurrentImageIndex((prev) => prev + 1)
      }
    }, delay)

    return () => {
      clearInterval(interval)
    }
  }, [currentImageIndex, images, delay])

  return images[currentImageIndex]
}
