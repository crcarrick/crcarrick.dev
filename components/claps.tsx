'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

const BOUNCE_KEYFRAMES = [
  { transform: 'scale(1)' },
  { transform: 'scale(1.3)' },
  { transform: 'scale(1)' },
]

function ClapIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.2 6c-.4-1-1.3-1.8-2.4-2.2-1.1-.3-2.3-.1-3.2.6L12 6.5l-2.6-2C8.5 3.8 7.3 3.5 6.2 3.9 5.1 4.2 4.2 5 3.8 6.1 3.4 7.1 3.5 8.3 4 9.3L12 21l8-11.7c.5-1 .6-2.2.2-3.3z" />
    </svg>
  )
}

export function Claps({ slug }: { slug: string }) {
  const [claps, setClaps] = useState<number | null>(null)
  const [isClapping, setIsClapping] = useState(false)
  const mutationId = useRef(0)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    fetch(`/api/post?slug=${encodeURIComponent(slug)}`)
      .then((res) => res.json())
      .then((data: { claps: number }) => setClaps(data.claps))
      .catch(() => setClaps(0))
  }, [slug])

  const handleClap = useCallback(async () => {
    if (isClapping) return
    setIsClapping(true)

    const currentMutationId = ++mutationId.current
    const previousClaps = claps

    setClaps((prev) => (prev ?? 0) + 1)

    buttonRef.current?.animate(BOUNCE_KEYFRAMES, {
      duration: 300,
      easing: 'ease-in-out',
    })

    try {
      const res = await fetch('/api/clap', {
        body: JSON.stringify({ slug }),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
      })
      const data = (await res.json()) as { claps: number }

      if (mutationId.current === currentMutationId) {
        setClaps(data.claps)
      }
    } catch {
      if (mutationId.current === currentMutationId) {
        setClaps(previousClaps)
      }
    } finally {
      setIsClapping(false)
    }
  }, [claps, isClapping, slug])

  if (claps === null) return null

  return (
    <div className="mt-8 flex items-center justify-end gap-3">
      <button
        ref={buttonRef}
        aria-label="Clap for this post"
        className="group flex items-center gap-2 rounded-full border border-text-light/20 px-4 py-2 text-sm transition-all hover:border-primary-light hover:text-primary-light active:scale-95 dark:border-text-dark/20 dark:hover:border-primary-dark dark:hover:text-primary-dark"
        onClick={handleClap}
      >
        <ClapIcon className="h-5 w-5 transition-transform group-hover:scale-110" />
        <span className="font-code">{claps}</span>
      </button>
    </div>
  )
}
