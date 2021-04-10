import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'
import React from 'react'

class AZ extends Document {
  static async getInitialProps(
    context: DocumentContext
  ): Promise<DocumentInitialProps> {
    const props = await Document.getInitialProps(context)

    return props
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head />

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default AZ
