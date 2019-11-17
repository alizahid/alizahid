import axios from 'axios'
import moment from 'moment'
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

import { Footer, Header } from '../components'
import { Post } from '../lib/types'

interface Props {
  posts: Post[]
}

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Ali Zahid</title>
        <meta name="description" content="My works and words" />
      </Head>

      <Header />

      <main>
        {posts.map(({ excerpt, published, slug, tags, title }, index) => (
          <Link key={index} href={`/blog/${slug}`}>
            <a className="block my-12 hover:text-primary">
              <figure className="-mx-8 lg:mx-0 lg:rounded lg:overflow-hidden lg:shadow">
                <img src={`/blog/${slug}/hero.png`} alt={title} />
              </figure>
              <article className="mt-4">
                <h2 className="text-3xl font-semibold">{title}</h2>
                <p className="my-4 text-gray-900">{excerpt}</p>
                <footer>
                  <span className="text-gray-500">
                    {moment(Number(published.$date.$numberLong)).fromNow()}
                  </span>
                  <span className="text-gray-500 ml-4">
                    {tags.sort().join(', ')}
                  </span>
                </footer>
              </article>
            </a>
          </Link>
        ))}
      </main>

      <Footer />
    </>
  )
}

Home.getInitialProps = async () => {
  const {
    data: { posts }
  } = await axios(`${process.env.uri}/posts`)

  return {
    posts
  }
}

export default Home
