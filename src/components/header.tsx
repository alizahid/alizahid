import React, { FunctionComponent } from 'react'
import { Link, NavLink } from 'react-router-dom'

import ali from '../assets/ali-zahid.jpg'

import './header.scss'

const Header: FunctionComponent = () => {
  return (
    <header>
      <Link to="/">
        <img src={ali} alt="Ali Zahid" />
        <h1>Ali Zahid</h1>
      </Link>
      <nav>
        <NavLink to="/" exact>
          Blog
        </NavLink>
        <NavLink to="/playground">Playground</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  )
}

export default Header
