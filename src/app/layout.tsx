import '~/styles/global.css'

import localFont from 'next/font/local'
import { ReactNode } from 'react'

import { Footer } from '~/components/footer'
import { Header } from '~/components/header'

const sans = localFont({
  display: 'swap',
  src: '../assets/fonts/satoshi.ttf',
  variable: '--font-sans',
})

const mono = localFont({
  display: 'swap',
  src: '../assets/fonts/roboto-mono.ttf',
  variable: '--font-mono',
})

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <html className={`${sans.variable} ${mono.variable}`} lang="en">
      <body>
        <div className="min-h-screen flex flex-col p-8 max-w-6xl mx-auto">
          <Header />

          {children}

          <Footer />
        </div>
      </body>
    </html>
  )
}
