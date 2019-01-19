import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
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
        <NavLink to="/">
          <img src={image} alt={title} />
        </NavLink>
        <nav>
          <NavLink to="/playground">Playground</NavLink>
          <NavLink to="/ideas">Ideas</NavLink>
          <NavLink to="/goals">Goals</NavLink>
          <NavLink to="/blog">Blog</NavLink>
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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
)
