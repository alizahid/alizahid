import React, { FunctionComponent, useEffect } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import obj from 'obj-str'

import { Spinner, Title } from '../components'
import { useStoreActions, useStoreState } from '../store'

import './blog.scss'

const Blog: FunctionComponent = () => {
  const { fetch } = useStoreActions(actions => actions.posts)
  const { posts, meta, loading } = useStoreState(state => state.posts)

  useEffect(() => {
    if (posts.length <= 1) {
      fetch(1)
    }
  }, [posts, fetch])

  const { more, next } = meta

  return (
    <main className="blog">
      <Title>Blog</Title>
      <section>
        {posts.map(
          ({ created, excerpt, featured, hero, slug, thumb, title }) => (
            <Link
              key={slug}
              className={obj({
                featured
              })}
              to={`/blog/${slug}`}
            >
              <figure>
                <img src={featured ? hero : thumb} alt={title} />
              </figure>
              <h1>{title}</h1>
              <p>{excerpt}</p>
              <span title={moment(created).format()}>
                {moment(created).fromNow()}
              </span>
            </Link>
          )
        )}
      </section>
      {loading && <Spinner />}
      {more && next && <button onClick={() => fetch(next)}>More</button>}
    </main>
  )
}

export default Blog
