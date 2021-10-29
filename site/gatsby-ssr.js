// Gatsby will use the wrapPageElement from gatsby-browser.js but *not* the wrapRootElement from gatsby-browser.js
import { wrapRootElement as wrapRootElementFn } from './gatsby-browser';

export const wrapRootElement = wrapRootElementFn;
