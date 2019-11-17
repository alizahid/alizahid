import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'

class Doc extends Document {
  render() {
    return (
      <html>
        <Head />

        <body className="font-sans cursor-default outline-none container px-8 w-full antialiased max-w-4xl">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default Doc
