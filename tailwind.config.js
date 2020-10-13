module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true
  },
  plugins: [],
  purge: ['./**/*.tsx', './assets/global.scss'],
  theme: {
    extend: {
      fontFamily: {
        mono: [
          'IBM Plex Mono',
          'Consolas',
          'Menlo',
          'Monaco',
          'Liberation Mono',
          'Courier New',
          'monospace'
        ],
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Helvetica',
          'Arial',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji'
        ]
      },
      screens: {
        dark: {
          raw: '(prefers-color-scheme: dark)'
        }
      }
    }
  },
  variants: {
    margin: ['responsive', 'first'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover']
  }
}
