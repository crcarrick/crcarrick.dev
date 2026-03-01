'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'

export function Carousel({
  images,
  speed = 10000,
}: {
  images: string[]
  speed?: number
}) {
  const [index, setIndex] = useState(0)
  const touchStart = useRef<number | null>(null)

  const advance = useCallback(() => {
    setIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  useEffect(() => {
    const interval = setInterval(advance, speed)
    return () => clearInterval(interval)
  }, [advance, speed])

  function handleTouchStart(e: React.TouchEvent) {
    touchStart.current = e.touches[0]!.clientX
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStart.current === null) return

    const delta = e.changedTouches[0]!.clientX - touchStart.current
    const threshold = 50

    if (Math.abs(delta) > threshold) {
      if (delta < 0) {
        setIndex((prev) => (prev + 1) % images.length)
      } else {
        setIndex((prev) => (prev - 1 + images.length) % images.length)
      }
    }

    touchStart.current = null
  }

  return (
    <div className="relative">
      <div
        className="relative overflow-hidden rounded-md"
        onTouchEnd={handleTouchEnd}
        onTouchStart={handleTouchStart}
      >
        {images.map((src, i) => (
          <Image
            key={src}
            alt={`Screenshot ${i + 1}`}
            className={`aspect-video w-full object-cover transition-opacity duration-500 ${
              i === index
                ? 'relative opacity-100'
                : 'absolute inset-0 opacity-0'
            }`}
            height={300}
            src={src}
            width={500}
          />
        ))}
      </div>
      <div className="mt-3 flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 w-2 rounded-full transition-colors ${
              i === index
                ? 'bg-primary-light dark:bg-primary-dark'
                : 'bg-text-light/20 dark:bg-text-dark/20'
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  )
}
