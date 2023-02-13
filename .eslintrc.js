module.exports = {
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'next/core-web-vitals',
  ],
  plugins: ['@typescript-eslint', 'jsx-a11y'],
  rules: {
    'import/order': [
      `error`,
      {
        alphabetize: {
          order: `asc`,
          caseInsensitive: true,
        },
        groups: [`builtin`, `external`, `internal`, `parent`, `sibling`, `index`, `object`, `type`],
        pathGroups: [
          {
            pattern: `react`,
            group: `builtin`,
          },
          {
            pattern: `react-dom`,
            group: `builtin`,
          },
          {
            pattern: `react-dom/server`,
            group: `builtin`,
          },
          {
            pattern: `~/**`,
            group: `internal`,
          },
        ],
        pathGroupsExcludedImportTypes: [`react`],
        'newlines-between': `always`,
      },
    ],
    'react/jsx-pascal-case': [
      `warn`,
      {
        allowNamespace: true,
      },
    ],
    'react/react-in-jsx-scope': 'off',
  },
}
