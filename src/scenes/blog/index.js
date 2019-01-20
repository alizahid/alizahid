import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getPosts } from '../../actions'
import { Head, Spinner } from '../../components'

import './index.scss'

class Blog extends Component {
  componentDidMount() {
    const { getPosts } = this.props

    getPosts()
  }

  more = () => {
    const {
      getPosts,
      meta: { next }
    } = this.props

    if (next) {
      getPosts(next)
    }
  }

  render() {
    const {
      posts,
      loading,
      meta: { next }
    } = this.props

    return (
      <main className="blog">
        <Head title="Blog" />
        {posts.map(({ date, excerpt, id, slug, thumb, tags, title }) => (
          <Link key={id} to={`/blog/${slug}`}>
            <article>
              {thumb && (
                <figure>
                  <img src={thumb} alt={title} />
                </figure>
              )}
              <h2>{title}</h2>
              <p>{excerpt}</p>
              <span title={date.format('LLLL')}>Posted {date.fromNow()}</span>
              <span>{tags.join(', ')}</span>
            </article>
          </Link>
        ))}
        {loading && <Spinner />}
        {next && <button onClick={this.more}>More</button>}
      </main>
    )
  }
}

const mapStateToProps = ({ posts: { meta, posts, loading } }) => ({
  meta,
  loading,
  posts: posts.filter(({ single }) => !single)
})

const mapDispatchToProps = dispatch => ({
  getPosts: page => dispatch(getPosts(page))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog)
