import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'
import React from 'react'

class AZ extends Document {
  static async getInitialProps(context: DocumentContext) {
    const props = await Document.getInitialProps(context)

    return props
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://api.fontshare.com/css?f[]=satoshi@1&amp;display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500&amp;display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default AZ
