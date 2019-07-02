import React, { FunctionComponent } from 'react'

import Footer from './footer'
import Header from './header'

interface Props {
  title: string
}

const Layout: FunctionComponent<Props> = ({ children, title }) => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <title>{[title, 'Ali Zahid'].filter(Boolean).join(' – ')}</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default Layout
