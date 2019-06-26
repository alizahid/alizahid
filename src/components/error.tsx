import React, { FunctionComponent } from 'react'

import './error.scss'

interface Props {
  message?: string
  title?: string
}

const Error: FunctionComponent<Props> = ({
  message = `I'm looking for the same thing.`,
  title = `Not found`
}) => {
  return (
    <div className="error">
      <h1>{title}</h1>
      <p>{message}</p>
    </div>
  )
}

export default Error
