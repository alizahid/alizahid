import '~/styles/main.css'

import { Analytics } from '@vercel/analytics/react'
import { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

import { mono, sans } from '~/assets/fonts'
import { Footer } from '~/components/footer'
import { Header } from '~/components/header'

export const metadata: Metadata = {
  description: 'Tech lead, Product developer, full-stack engineer',
  metadataBase: new URL('https://alizahid.dev'),
  openGraph: {
    type: 'website',
  },
  title: 'Ali Zahid × Tech lead, Product developer, full-stack engineer',
}

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <html
      className={twMerge(sans.variable, mono.variable)}
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider attribute="class">
          <div className="mx-auto flex min-h-screen max-w-5xl flex-col p-4 lg:p-8">
            <Header />

            {children}

            <Footer />
          </div>
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  )
}
