import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

class Doc extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head />

        <body className="text-gray-900 bg-white dark:text-gray-100 dark:bg-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Doc
