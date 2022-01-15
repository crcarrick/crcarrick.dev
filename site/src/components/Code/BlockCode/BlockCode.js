import React from 'react'

import parseRange from 'parse-numeric-range'
import Highlight from 'prism-react-renderer'
import Prism from 'prismjs'

import { useDelayedHover } from '~/hooks/useDelayedHover'

import * as S from './BlockCode.style'

import '../langs'
import '../theme.css'

const extractFromMetastring = (metastring, extract) => {
  if (metastring == null) return

  try {
    const meta = JSON.parse(metastring)

    return extract(meta)
  } catch {
    console.warn(`Error parsing metastring ${metastring}`)
    console.warn('Check the JSON')
  }
}

const createLineHighlighter = (range) => {
  const lineStr = extractFromMetastring(range, (meta) => meta.highlight)

  if (lineStr) {
    const lines = parseRange(lineStr)

    return (idx) => lines.includes(idx + 1)
  }

  return () => false
}

const highlightKeyword = ({ className, token }) => {
  if (!token.types.some((type) => type === 'keyword')) return className

  return `${className} keyword-${token.content}`
}

const renderToken =
  ({ getTokenProps }) =>
  (token, key) => {
    let { className, ...props } = getTokenProps({ token, key })

    return <span className={highlightKeyword({ className, token })} {...props} />
  }

const renderLine =
  ({ getLineProps, shouldHighlightLine, willHighlightLines, ...rest }) =>
  (line, key) => {
    const props = getLineProps({ line, key })

    return (
      <S.Line
        {...props}
        highlight={shouldHighlightLine(key)}
        willHighlightLines={willHighlightLines}
      >
        {line.map(renderToken(rest))}
      </S.Line>
    )
  }

const trimTokens = (tokens) => (tokens.length >= 2 ? tokens.slice(0, -1) : tokens)

export const BlockCode = ({ className = 'language-jsx', children, metastring }) => {
  const { hovered, ...delayedHoverProps } = useDelayedHover(500)

  const language = className.replace('language-', '')
  const filename = extractFromMetastring(metastring, (meta) => meta.filename)
  const copy = extractFromMetastring(metastring, (meta) => meta.copy)
  const shouldHighlightLine = createLineHighlighter(metastring)
  const willHighlightLines = Boolean(metastring)

  const handleClick = () => navigator.clipboard.writeText(copy ?? children)

  return (
    <S.HoverWrapper {...delayedHoverProps}>
      <S.Toolbar>
        <S.Filename>{filename}</S.Filename>
        <S.Language>{language}</S.Language>
      </S.Toolbar>
      <Highlight Prism={Prism} language={language} code={children}>
        {({ className, style, tokens, ...rest }) => {
          const lines = trimTokens(tokens)

          return (
            <S.ScrollWrapper>
              <S.Pre className={className} style={style}>
                {lines.map(renderLine({ ...rest, shouldHighlightLine, willHighlightLines }))}
              </S.Pre>
            </S.ScrollWrapper>
          )
        }}
      </Highlight>
      <S.CopyButton show={hovered} onClick={handleClick}>
        copy
      </S.CopyButton>
    </S.HoverWrapper>
  )
}

export const CodeWrapper = S.CodeWrapper
