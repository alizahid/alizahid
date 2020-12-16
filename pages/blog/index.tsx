import dayjs from 'dayjs'
import { promises as fs } from 'fs'
import matter from 'gray-matter'
import { orderBy } from 'lodash'
import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { resolve } from 'path'
import React from 'react'

import { Footer, Header, Post } from '../../components'
import { PostMeta } from '../../types'

type Props = {
  posts: PostMeta[]
}

const Blog: NextPage<Props> = ({ posts }) => (
  <>
    <Head>
      <title>Blog / Ali Zahid</title>
      <meta content="My writing" name="description" />
      <meta content="My writing" property="og:description" />
      <meta content="website" property="og:type" />
    </Head>

    <Header title="Blog" />

    <main className="grid lg:grid-cols-2 gap-16">
      {posts.map((post) => (
        <Post key={post.slug} post={post} />
      ))}
    </main>

    <Footer />
  </>
)

export const getStaticProps: GetStaticProps<Props> = async () => {
  const path = resolve('posts')

  const files = await fs.readdir(path)

  const posts: PostMeta[] = await Promise.all(
    files.map(async (file) => {
      const path = resolve('posts', file)

      const markdown = await fs.readFile(path, 'utf8')

      const { data } = matter(markdown)

      return {
        date: dayjs(data.date).toISOString(),
        excerpt: data.excerpt,
        slug: data.slug,
        title: data.title
      }
    })
  )

  return {
    props: {
      posts: orderBy(posts, 'date', 'desc')
    }
  }
}

export default Blog
