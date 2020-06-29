import frontMatter from 'front-matter'
import { readdir, readFile } from 'fs-extra'
import { orderBy } from 'lodash'
import moment from 'moment'
import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { join } from 'path'
import React from 'react'

import { Post, PostAttributes } from '../types'

interface Props {
  posts: Post[]
}

const Home: NextPage<Props> = ({ posts }) => (
  <>
    <Head>
      <title>Blog / Ali Zahid</title>
      <meta content="My words" name="description" />
    </Head>

    <main>
      {posts.map(({ date, excerpt, slug, tags, title }, index) => (
        <Link href={`/blog/${slug}`} key={index}>
          <a className="block my-12 first:mt-0 last:mb-0 text-black hover:text-red-500">
            <figure className="-mx-8 lg:mx-0">
              <img
                alt={title}
                className="lg:rounded-lg"
                src={`/blog/${slug}/hero.png`}
              />
            </figure>
            <section className="mt-4">
              <h2 className="text-4xl font-semibold leading-tight">{title}</h2>
              <p className="mt-2 text-gray-900">{excerpt}</p>
              <footer className="mt-4 flex flex-col lg:flex-row text-sm">
                <span
                  className="text-gray-500"
                  title={moment(date).format('LL')}>
                  {moment(date).fromNow()}
                </span>
                <span className="text-gray-500 mt-2 lg:mt-0 lg:ml-4">
                  {tags.sort().join(', ')}
                </span>
              </footer>
            </section>
          </a>
        </Link>
      ))}
    </main>
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const path = join(process.cwd(), 'posts')

  const files = await readdir(path)

  const posts: Post[] = []

  for await (const file of files) {
    const content = await readFile(join(path, file), 'utf8')

    const data = frontMatter<PostAttributes>(content)

    const post: Post = {
      body: data.body,
      date: moment(data.attributes.date).toISOString(),
      excerpt: data.attributes.excerpt,
      slug: data.attributes.slug,
      tags: data.attributes.tags.split(', '),
      title: data.attributes.title
    }

    posts.push(post)
  }

  return {
    props: {
      posts: orderBy(posts, 'date', 'desc')
    }
  }
}

export default Home
