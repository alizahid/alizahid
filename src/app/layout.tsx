import '~/styles/main.css'

import { Analytics } from '@vercel/analytics/react'
import { type Metadata } from 'next'
import { type ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

import { mono, resume, sans } from '~/assets/fonts'

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
      className={twMerge(sans.variable, mono.variable, resume.variable)}
      lang="en"
    >
      <body>
        {children}

        <Analytics />
      </body>
    </html>
  )
}
