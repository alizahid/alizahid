import React, { FunctionComponent, useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'
// @ts-ignore
import { RichText } from 'prismic-reactjs'
import moment from 'moment'

import { Error, Spinner, Title } from '../components'
import { useActions, useStore } from '../store'

import './article.scss'

interface Props {
  slug: string
}

const Article: FunctionComponent<RouteComponentProps<Props>> = ({
  match: {
    params: { slug }
  }
}) => {
  const { fetchOne } = useActions(actions => actions.posts)
  const { posts, loading } = useStore(state => state.posts)

  const post = posts.find(post => post.slug === slug)

  useEffect(() => {
    const fetchPost = async () => {
      await fetchOne(slug)
    }

    if (!post) {
      fetchPost()
    }
  }, [slug, post, fetchOne])

  if (loading) {
    return (
      <main>
        <Spinner />
      </main>
    )
  }

  if (!post) {
    return <Error />
  }

  const { content, created, hero, tags, title } = post

  return (
    <main className="article">
      <Title>{title}</Title>
      <figure>
        <img src={hero} alt={title} />
      </figure>
      <div className="header">
        <h1>{title}</h1>
        <div className="meta">
          <span title={moment(created).format()}>
            {moment(created).fromNow()}
          </span>
          <span>{tags.join(', ')}</span>
        </div>
      </div>
      {RichText.render(content)}
    </main>
  )
}

export default Article
