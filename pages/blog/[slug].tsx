import axios from 'axios'
import moment from 'moment'
import { NextPage } from 'next'
import Error from 'next/error'
import Head from 'next/head'
import React from 'react'

import { Body, Footer, Header } from '../../components'
import { Post } from '../../lib/types'

interface Props {
  post: Post
}

const Article: NextPage<Props> = ({ post }) => {
  if (!post) {
    return <Error statusCode={404} />
  }

  const { content, excerpt, published, slug, tags, title } = post

  return (
    <>
      <Head>
        <title>{title} / Ali Zahid</title>
        <meta name="description" content={excerpt} />
      </Head>

      <Header />

      <main>
        <h1 className="text-5xl font-semibold">{title}</h1>
        <p className="text-gray-500">
          <span>{moment(Number(published.$date.$numberLong)).fromNow()}</span>
          <span className="ml-4">{tags.sort().join(', ')}</span>
        </p>
        <figure className="-mx-8 mt-8 lg:mb-8 lg:mx-0 lg:rounded lg:overflow-hidden lg:shadow">
          <img src={`/blog/${slug}/hero.png`} alt={title} />
          <figcaption className="text-gray-700 p-8 lg:p-4">
            {excerpt}
          </figcaption>
        </figure>
        <Body className="mb-12" body={content} slug={slug} />
      </main>

      <Footer />
    </>
  )
}

Article.getInitialProps = async ({ query }) => {
  const { slug } = query

  const {
    data: { post }
  } = await axios(`${process.env.uri}/post?slug=${slug}`)

  return {
    post
  }
}

export default Article
