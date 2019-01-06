import React, { Component } from 'react'
import { connect } from 'react-redux'

import './index.scss'

class Blog extends Component {
  render() {
    return <main className="blog">Blog</main>
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog)
