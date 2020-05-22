import moment from 'moment'
import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

import { content } from '../lib'
import { Post } from '../types'

interface Props {
  posts: Post[]
}

const Home: NextPage<Props> = ({ posts }) => (
  <>
    <Head>
      <title>Blog / Ali Zahid</title>
      <meta content="My works and words" name="description" />
    </Head>

    <main>
      {posts.map(({ date, excerpt, image, link, tags, title }, index) => (
        <a
          className="block my-12 text-black hover:text-red-500"
          href={link}
          key={index}>
          <figure className="-mx-8 lg:mx-0">
            <img alt={title} className="lg:rounded" src={image} />
          </figure>
          <section className="mt-4">
            <h2 className="text-3xl font-semibold">{title}</h2>
            <p className="my-4 text-gray-900">{excerpt}</p>
            <footer>
              <span className="text-gray-500">{moment(date).fromNow()}</span>
              <span className="text-gray-500 ml-4">
                {tags.sort().join(', ')}
              </span>
            </footer>
          </section>
        </a>
      ))}
      <div className="flex">
        <a
          className="bg-red-500 px-3 py-2 rounded text-white hover:text-white"
          href="https://medium.com/@alizahid0">
          More on Medium
        </a>
      </div>
    </main>
  </>
)

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await content.posts()

  return {
    props: {
      posts
    }
  }
}

export default Home
