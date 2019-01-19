import React, { Component } from 'react'

import './index.scss'

export default class Spinner extends Component {
  render() {
    const { full, half } = this.props

    return <div className="spinner" data-full={full} data-half={half} />
  }
}
