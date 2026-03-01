import React from 'react'

import { CopyButton } from '@/components/copy-button'

// rehype-pretty-code wraps all code blocks in <figure>, with an optional
// <figcaption> for titled blocks (e.g. ```js title="app.js"). We override
// `figure` rather than `pre` so we can see both children and render a unified
// header bar: filename/title on the left, language badge on the right, with
// the copy button pinned to the bottom-right of the block.
export function CodeFigure({
  children,
  ...props
}: React.HTMLAttributes<HTMLElement> & {
  'data-rehype-pretty-code-figure'?: string
}) {
  if (props['data-rehype-pretty-code-figure'] === undefined) {
    return <figure {...props}>{children}</figure>
  }

  let title: React.ReactNode = null
  let language: string | undefined
  const codeChildren: React.ReactNode[] = []

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) {
      codeChildren.push(child)
      return
    }

    const cp = child.props as Record<string, unknown>

    // Pull the title out of <figcaption> so we can render it in our header
    if (cp['data-rehype-pretty-code-title'] !== undefined) {
      title = cp.children as React.ReactNode
      if (!language) language = cp['data-language'] as string | undefined
      return
    }

    if (child.type === 'pre' && !language) {
      language = cp['data-language'] as string | undefined
    }

    codeChildren.push(child)
  })

  const hasHeader = Boolean(title) || Boolean(language)

  return (
    <div className="group relative">
      {hasHeader && (
        <div className="flex items-center justify-between rounded-t-lg border-b border-white/10 bg-[#282a36] px-4 py-2 font-code text-xs">
          <span className="text-white/80">{title ?? '\u00A0'}</span>
          {language && <span className="text-white/40">{language}</span>}
        </div>
      )}
      <div
        className={
          hasHeader ? '[&>pre]:rounded-t-none! [&>pre]:mt-0!' : ''
        }
      >
        {codeChildren}
      </div>
      <CopyButton />
    </div>
  )
}
