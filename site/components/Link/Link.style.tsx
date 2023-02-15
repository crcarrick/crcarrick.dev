import { cva } from '~/utils/cva'

export const link = cva(
  [
    'no-underline',
    'cursor-pointer',
    'pseudo:outline-none',
    'pseudo:underline',
    'pseudo:decoration-primary',
    'pseudo:decoration-2',
  ],
  {
    variants: {
      context: {
        nav: ['p-md', 'uppercase', 'underline-offset-2'],
        article: [
          'text-text',
          'underline',
          'decoration-primary',
          'decoration-2',
          'underline-offset-2',
          'hocus:no-underline',
          'hocus:bg-primary',
          'hocus:text-white',
        ],
      },
    },
  }
)
