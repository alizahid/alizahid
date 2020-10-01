import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

class Doc extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head />

        <body className="container">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Doc
