import '../styles/tailwind.scss'
import '../styles/global.scss'
import '../styles/prism.css'

import { AppProps } from 'next/app'
import React, { FunctionComponent } from 'react'

const Ali: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
)

export default Ali
