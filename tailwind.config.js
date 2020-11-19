module.exports = {
  plugins: [],
  purge: ['./**/*.tsx', './assets/global.scss'],
  theme: {
    colors: {
      black: '#000',
      gray: {
        100: '#F5F5F5',
        200: '#E5E5E5',
        300: '#D4D4D4',
        400: '#A3A3A3',
        50: '#FAFAFA',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#171717'
      },
      white: '#fff'
    },
    extend: {
      colors: {
        highlight: 'rgba(0, 0, 0, 0.5)',
        primary: '#10B981'
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
