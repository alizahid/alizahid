import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'

class Head extends Component {
  render() {
    const { meta } = this.props
    const { title = meta.subtitle } = this.props

    return (
      <Helmet>
        <title>{[title, meta.title].join(': ')}</title>
      </Helmet>
    )
  }
}

const mapStateToProps = ({ meta: { meta } }) => ({
  meta
})

export default connect(mapStateToProps)(Head)
