import React, { Component } from 'react'
import { connect } from 'react-redux'

import './index.scss'

class Article extends Component {
  render() {
    return <main className="article">Article</main>
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Article)
