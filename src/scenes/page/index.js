import React, { Component } from 'react'
import { connect } from 'react-redux'

import './index.scss'

class Page extends Component {
  render() {
    return <main className="page">Page</main>
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)
