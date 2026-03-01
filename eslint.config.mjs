import config from '@crcarrick/eslint-config'
import nextPlugin from '@next/eslint-plugin-next'

export default [
  ...config,
  {
    plugins: { '@next/next': nextPlugin },
    rules: nextPlugin.configs.recommended.rules,
  },
  {
    ignores: ['.next/', 'site/'],
  },
]
