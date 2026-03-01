'use client'

import { useCallback, useRef, useState } from 'react'

export function CopyButton() {
  const [copied, setCopied] = useState(false)
  const ref = useRef<HTMLButtonElement>(null)

  const handleCopy = useCallback(async () => {
    const code = ref.current?.closest('.group')?.querySelector('code')
    if (!code) return

    await navigator.clipboard.writeText(code.textContent ?? '')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [])

  return (
    <button
      ref={ref}
      aria-label="Copy code"
      className="absolute bottom-3 right-3 rounded bg-white/10 px-2 py-1 font-code text-xs text-white/60 opacity-0 transition-opacity hover:text-white group-hover:opacity-100"
      onClick={handleCopy}
    >
      {copied ? 'Copied!' : 'Copy'}
    </button>
  )
}
