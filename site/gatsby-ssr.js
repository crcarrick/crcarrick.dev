import path from 'path'

import { ChunkExtractor } from '@loadable/server'

import {
  wrapRootElement as wrapRootElementFn,
  wrapPageElement as wrapPageElementFn,
} from './gatsby-browser'

const extractor = new ChunkExtractor({
  entrypoints: [],
  statsFile: path.resolve('./public/loadable-stats.json'),
})

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  setHeadComponents(extractor.getLinkElements())
  setPostBodyComponents([...extractor.getScriptElements(), ...extractor.getStyleElements()])

  extractor.chunks = []
}
export const wrapRootElement = ({ element }) => extractor.collectChunks(wrapRootElementFn(element))
export const wrapPageElement = wrapPageElementFn
