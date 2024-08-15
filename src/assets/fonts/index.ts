import localFont from 'next/font/local'

export const sans = localFont({
  src: './basis-sans.woff2',
  variable: '--font-sans',
  weight: '100 900',
})

export const mono = localFont({
  src: './basis-mono.woff2',
  variable: '--font-mono',
  weight: '100 900',
})
