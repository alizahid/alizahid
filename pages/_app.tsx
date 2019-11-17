import '../assets/global.scss'

import App from 'next/app'
import React from 'react'

class Application extends App {
  render() {
    const { Component, pageProps } = this.props

    return <Component {...pageProps} />
  }
}

export default Application
