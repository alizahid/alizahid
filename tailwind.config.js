module.exports = {
  plugins: [],
  purge: ['./**/*.tsx', './assets/global.scss'],
  theme: {
    colors: {
      black: '#000',
      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c'
      },
      white: '#fff'
    },
    extend: {
      colors: {
        highlight: 'rgba(0, 0, 0, 0.5)',
        primary: '#48bb78'
      },
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
          'Rubik',
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
      padding: {
        hero: 'calc(100% / 3 * 2)'
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
