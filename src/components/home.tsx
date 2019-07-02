import React, { FunctionComponent } from 'react'

import { Post } from '..'
import { publishDate } from '../lib'

interface Props {
  posts: Post[]
}

const Home: FunctionComponent<Props> = ({ posts }) => {
  return (
    <main className="home container">
      {posts.map(({ slug, meta: { excerpt, published, title } }) => (
        <a key={slug} href={`/blog/${slug}`}>
          <article>
            <img src={`/img/${slug}/thumb.png`} />
            <h2>{title}</h2>
            <p>{excerpt}</p>
            <footer>{publishDate(published)}</footer>
          </article>
        </a>
      ))}
    </main>
  )
}

export default Home
