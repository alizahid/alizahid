import React, { Component } from 'react'
import { RichText } from 'prismic-reactjs'
import { connect } from 'react-redux'

import { getPost } from '../../actions'
import { Head, Spinner } from '../../components'

import './index.scss'

class Article extends Component {
  componentDidMount() {
    const { slug, getPost } = this.props

    getPost(slug)
  }

  render() {
    const { post, loading } = this.props

    if (loading) {
      return <Spinner fullscreen />
    }

    if (!post) {
      return (
        <main>
          <Head title="Article not found" />
          <h1>Article not found</h1>
          <p>I deleted the article you're looking for.</p>
        </main>
      )
    }

    const { content, date, tags, title, updated } = post

    return (
      <main className="article">
        <Head title={title} />
        <h1>{title}</h1>
        <header>
          <span title={date.format('LLLL')}>Posted {date.fromNow()}</span>
          <span title={updated.format('LLLL')}>
            Updated {updated.fromNow()}
          </span>
          <span>{tags.join(', ')}</span>
        </header>
        <article>{RichText.render(content)}</article>
      </main>
    )
  }
}

const mapStateToProps = (
  { posts: { posts, loading } },
  {
    match: {
      params: { slug }
    }
  }
) => ({
  loading,
  slug,
  post: posts.find(post => post.slug === slug)
})

const mapDispatchToProps = dispatch => ({
  getPost: slug => dispatch(getPost(slug))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Article)
