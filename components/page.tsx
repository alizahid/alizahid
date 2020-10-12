import Head from 'next/head'
import React, { FunctionComponent } from 'react'

import { Footer } from './footer'
import { Header } from './header'

interface Props {
  className?: string
  description: string
  subtitle?: string
  title: string
}

export const Page: FunctionComponent<Props> = ({
  children,
  className,
  description,
  subtitle,
  title
}) => (
  <>
    <Head>
      <title>{[subtitle, title].filter(Boolean).join(' / ')} / Ali Zahid</title>
      <meta content={description} name="description" />
      <meta content={description} property="og:description" />
    </Head>

    <main className="max-w-5xl min-h-screen flex flex-col justify-center p-8 lg:p-20">
      <Header title={title} />

      <div className={`my-20 ${className}`}>{children}</div>

      <Footer />
    </main>
  </>
)
