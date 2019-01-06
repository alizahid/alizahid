import React, { Component } from 'react'

import './index.scss'

export default class Spinner extends Component {
  render() {
    const { fullscreen } = this.props

    return <div className="spinner" data-fullscreen={fullscreen} />
  }
}
