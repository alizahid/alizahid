import 'tailwindcss/tailwind.css'
import '../styles/global.scss'

import { AppProps } from 'next/app'
import { usePanelbear } from 'next-use-panelbear'
import React, { FunctionComponent } from 'react'

import { Footer } from '../components/footer'
import { Header } from '../components/header'

const AZ: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  usePanelbear('B2z8tNyK4Ls')

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default AZ
