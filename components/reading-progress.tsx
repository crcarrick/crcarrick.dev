'use client'

import { useEffect, useState } from 'react'

export function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function handleScroll() {
      const { documentElement } = document
      const scrollTop = documentElement.scrollTop
      const scrollHeight = documentElement.scrollHeight - documentElement.clientHeight
      setProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 z-50 h-0.5 w-full">
      <div
        className="h-full bg-primary-light transition-[width] duration-75 ease-out dark:bg-primary-dark"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
