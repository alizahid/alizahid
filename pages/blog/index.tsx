import frontMatter from 'front-matter'
import { readdir, readFile } from 'fs-extra'
import { orderBy } from 'lodash'
import moment from 'moment'
import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { join } from 'path'
import React from 'react'

import { Footer, Header } from '../../components'
import { Post, PostAttributes } from '../../types'

interface Props {
  posts: Post[]
}

const Blog: NextPage<Props> = ({ posts }) => (
  <>
    <Head>
      <title>Blog / Ali Zahid</title>
      <meta content="My words" name="description" />
    </Head>

    <main className="min-h-screen flex flex-col justify-center p-8 lg:p-20">
      <Header title="Blog" />

      <div className="my-12">
        {posts.map(({ date, excerpt, slug, tags, title }, index) => (
          <Link href={`/blog/${slug}`} key={index}>
            <a className="flex flex-col lg:flex-row items-center mt-12 first:mt-0 text-black hover:text-teal-600">
              <figure className="-mx-8 lg:mx-0 bg-gray-100 overflow-hidden lg:rounded-lg">
                <img
                  alt={title}
                  className="w-full lg:w-64"
                  src={`/blog/${slug}/hero.png`}
                />
              </figure>
              <section className="flex-1 mt-8 lg:mt-0 lg:ml-8">
                <h2 className="text-5xl font-semibold leading-tight">
                  {title}
                </h2>
                <p className="mt-2 text-xl text-gray-800">{excerpt}</p>
                <footer className="mt-2 flex flex-col lg:flex-row text-lg">
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
      </div>

      <Footer />
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

export default Blog
