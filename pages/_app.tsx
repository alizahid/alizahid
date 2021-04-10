import 'tailwindcss/tailwind.css'
import '../styles/global.scss'

import { AppProps } from 'next/app'
import React, { FunctionComponent } from 'react'

import { usePanelbear } from '../hooks'

const AZ: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  usePanelbear('B2z8tNyK4Ls')

  return <Component {...pageProps} />
}

export default AZ
