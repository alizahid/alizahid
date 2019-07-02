import React, { FunctionComponent } from 'react'

const Header: FunctionComponent = () => {
  return (
    <header className="header">
      <div className="container">
        <img src="/img/ali-zahid.jpg" />
        <h1>Ali Zahid</h1>
        <nav>
          <a href="/">Blog</a>
          <a href="mailto:ali.zahid@live.com">Email</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
