import React, { FunctionComponent } from 'react'
import { Helmet } from 'react-helmet'

interface Props {
  children: string
}

const Title: FunctionComponent<Props> = ({ children }) => {
  return (
    <Helmet>
      <title>{[children, 'Ali Zahid'].join(': ')}</title>
    </Helmet>
  )
}

export default Title
