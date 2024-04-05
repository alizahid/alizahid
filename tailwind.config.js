const { range } = require('lodash')

function createPalette(name, alpha) {
  return range(1, 13).reduce(
    (previous, current) => ({
      ...previous,
      [alpha ? `a${current}` : current]:
        `var(--${name}-${alpha ? 'a' : ''}${current})`,
    }),
    {},
  )
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.tsx'],
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography')],
  theme: {
    extend: {
      colors: {
        accent: {
          ...createPalette('jade'),
          ...createPalette('jade', true),
        },
        gray: {
          ...createPalette('sage'),
          ...createPalette('sage', true),
        },
        yellow: {
          ...createPalette('amber'),
          ...createPalette('amber', true),
        },
      },
      fontFamily: {
        mono: ['var(--font-mono)'],
        sans: ['var(--font-sans)'],
      },
      typography: {
        gray: {
          css: {
            '--tw-prose-body': 'var(--gray-12)',
            '--tw-prose-bold': 'var(--gray-12)',
            '--tw-prose-bullets': 'var(--gray-8)',
            '--tw-prose-captions': 'var(--gray-11)',
            '--tw-prose-code': 'var(--gray-12)',
            '--tw-prose-counters': 'var(--gray-10)',
            '--tw-prose-headings': 'var(--gray-12)',
            '--tw-prose-hr': 'var(--gray-6)',
            '--tw-prose-lead': 'var(--gray-11)',
            '--tw-prose-links': 'var(--accent-11)',
            '--tw-prose-pre-bg': 'var(--gray-2)',
            '--tw-prose-pre-code': 'var(--gray-12)',
            '--tw-prose-quote-borders': 'var(--gray-6)',
            '--tw-prose-quotes': 'var(--gray-11)',
            '--tw-prose-td-borders': 'var(--gray-6)',
            '--tw-prose-th-borders': 'var(--gray-6)',
          },
        },
      },
    },
  },
}
