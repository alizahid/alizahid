import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

class Doc extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head />

        <body className="text-gray-900 bg-gray-100 dark:text-gray-100 dark:bg-gray-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Doc
