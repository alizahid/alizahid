import '../styles/global.scss'
import '../styles/highlight.scss'
import 'react-medium-image-zoom/dist/styles.css'

import { usePanelbear } from '@panelbear/panelbear-nextjs'
import { AppProps } from 'next/app'
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
