import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'

class Doc extends Document {
  render(): JSX.Element {
    return (
      <html>
        <Head />

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default Doc
