import Markdown from 'react-markdown'
import React, { FunctionComponent } from 'react'

import { Post } from '..'
import { imagePath, publishDate } from '../lib'

interface Props {
  post: Post
}

const Article: FunctionComponent<Props> = ({
  post: {
    body,
    slug,
    meta: { published, tags, title }
  }
}) => {
  return (
    <main className="article">
      <header className="container">
        <h1>{title}</h1>
        <p>Published {publishDate(published)}</p>
      </header>
      <figure className="hero container">
        <img src={`/img/${slug}/hero.png`} />
      </figure>
      <section className="container">
        <Markdown
          source={body}
          transformImageUri={path => imagePath(slug, path)}
        />
      </section>
      <footer className="container">
        <ul>
          {tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </footer>
    </main>
  )
}

export default Article
