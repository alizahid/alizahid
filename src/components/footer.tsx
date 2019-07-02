import React, { FunctionComponent } from 'react'

const Footer: FunctionComponent = () => {
  const date = new Date()

  let year = date.getFullYear()

  if (date.getMonth() > 10) {
    year++
  }

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {year} Ali Zahid</p>
        <nav>
          <a href="https://github.com/alizahid">GitHub</a>
          <a href="https://twitter.com/alizahid0">Twitter</a>
          <a href="https://medium.com/@alizahid0">Medium</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
