import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getMeta } from '../../actions'

import './index.scss'

class Header extends Component {
  state = {
    query: ''
  }

  componentDidMount() {
    const { getMeta } = this.props

    getMeta()
  }

  render() {
    const {
      meta: { email, image, title }
    } = this.props

    return (
      <header className="header">
        <Link to="/">
          <img src={image} alt={title} />
        </Link>
        <nav>
          <Link to="/playground">Playground</Link>
          <Link to="/blog">Blog</Link>
          <a href={email}>Email</a>
        </nav>
      </header>
    )
  }
}

const mapStateToProps = ({ meta: { meta } }) => ({
  meta
})

const mapDispatchToProps = dispatch => ({
  getMeta: () => dispatch(getMeta())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
