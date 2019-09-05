import NextHead from 'next/head'
import { Fragment, FunctionComponent } from 'react'

import { colors, layout } from '../lib/styles'

interface Props {
  description: string
  title: string
}

const Head: FunctionComponent<Props> = ({ description, title }) => (
  <Fragment>
    <NextHead>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" content={description} />
      <title>{title}</title>
      <link href="https://rsms.me/inter/inter.css" rel="stylesheet" />
      <link
        href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono:400,700&display=swap"
        rel="stylesheet"
      />
    </NextHead>
    <style global jsx>{`
      * {
        border-radius: 0;
        box-sizing: border-box;
        font-weight: normal;
        margin: 0;
        outline: none;
        padding: 0;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
      }

      a {
        color: ${colors.primary};
        cursor: pointer;
        text-decoration: none;
        transition: 0.2s;
      }

      a:hover {
        filter: brightness(1.2);
      }

      body {
        background: ${colors.background};
        color: ${colors.foreground};
        margin: 0;
        font: normal 1em/1 'Inter var', -apple-system, BlinkMacSystemFont,
          'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
          'Droid Sans', 'Helvetica Neue', sans-serif;
        margin: auto;
        max-width: ${layout.width};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      code {
        font: normal 1em/1 'IBM Plex Mono', source-code-pro, Menlo, Monaco,
          Consolas, 'Courier New', monospace;
        line-height: 1.6;
      }

      h1,
      h2,
      h3 {
        font-weight: 600;
        margin: 1em 0;
      }

      h1 {
        font-size: 4em;
      }

      h2 {
        font-size: 3em;
        margin-bottom: 0.5em;
      }

      h3 {
        font-size: 2em;
        margin-bottom: 0.5em;
      }

      img {
        max-width: 100%;
        vertical-align: top;
      }

      ol,
      ul {
        margin: 1em 0;
      }

      ol li,
      ul li {
        line-height: 1.6;
        list-style: square;
        margin: 1em 0 1em 2em;
      }

      p {
        margin: 1em 0;
        line-height: 1.6;
      }

      #__next {
        margin: ${layout.gutter};
      }
    `}</style>
  </Fragment>
)

export default Head