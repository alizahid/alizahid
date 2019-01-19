import React, { Component } from 'react'
import { RichText } from 'prismic-reactjs'
import { connect } from 'react-redux'

import { getPages } from '../../actions'
import { Head, Spinner } from '../../components'

import './index.scss'

class Page extends Component {
  componentDidMount() {
    const { getPages } = this.props

    getPages()
  }

  render() {
    const { page, loading } = this.props

    if (loading) {
      return <Spinner full />
    }

    if (!page) {
      return (
        <main>
          <Head title="Page not found" />
          <h1>Page not found</h1>
          <p>I'm hiding the page you're looking for.</p>
        </main>
      )
    }

    const { content, title } = page

    return (
      <main className="page">
        <Head title={title} />
        <h1>{title}</h1>
        {RichText.render(content)}
      </main>
    )
  }
}

const mapStateToProps = (
  { pages: { pages, loading } },
  {
    match: {
      params: { slug }
    }
  }
) => ({
  loading,
  slug,
  page: pages.find(page => page.slug === slug)
})

const mapDispatchToProps = dispatch => ({
  getPages: () => dispatch(getPages())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)
