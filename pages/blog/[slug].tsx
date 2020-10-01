import frontMatter from 'front-matter'
import { readdir, readFile } from 'fs-extra'
import moment from 'moment'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { join } from 'path'
import React from 'react'
import Markdown from 'react-markdown'
import unwrapImages from 'remark-unwrap-images'

import { Footer, Header } from '../../components'
import { Post, PostAttributes } from '../../types'

interface Props {
  post: Post
}

const Blog: NextPage<Props> = ({ post }) => (
  <>
    <Head>
      <title>{post.title} / Blog / Ali Zahid</title>
      <meta content="My words" name="description" />
    </Head>

    <main className="min-h-screen flex flex-col justify-center p-8 lg:p-20">
      <Header title="Blog" />

      <figure className="mt-12 -mx-8 lg:mx-0 overflow-hidden lg:rounded-lg">
        <img alt={post.title} src={`/blog/${post.slug}/hero.png`} />
      </figure>
      <section className="mt-8">
        <h1 className="text-6xl font-semibold leading-tight">{post.title}</h1>
        <p className="mt-2 text-2xl text-gray-800">{post.excerpt}</p>
        <footer className="mt-2 flex flex-col lg:flex-row text-lg">
          <span
            className="text-gray-500"
            title={moment(post.date).format('LL')}>
            {moment(post.date).fromNow()}
          </span>
          <span className="text-gray-500 mt-2 lg:mt-0 lg:ml-4">
            {post.tags.sort().join(', ')}
          </span>
        </footer>
      </section>
      <article className="post">
        <Markdown
          plugins={[unwrapImages]}
          renderers={{
            image({ alt, src }) {
              return (
                <figure>
                  <a href={src}>
                    <img src={src} />
                  </a>
                  {alt && <figcaption>{alt}</figcaption>}
                </figure>
              )
            }
          }}
          source={post.body.replace(/\\(\$|")/g, '$1')}
          transformImageUri={(uri) => `/blog/${post.slug}/${uri}`}
        />
      </article>

      <Footer />
    </main>
  </>
)

export const getStaticPaths: GetStaticPaths = async () => {
  const path = join(process.cwd(), 'posts')

  const files = await readdir(path)

  return {
    fallback: false,
    paths: files.map((file) => ({
      params: {
        slug: file.slice(0, -3)
      }
    }))
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const path = join(process.cwd(), 'posts', `${params?.slug}.md`)

  const content = await readFile(path, 'utf8')

  const data = frontMatter<PostAttributes>(content)

  const post: Post = {
    body: data.body,
    date: moment(data.attributes.date).toISOString(),
    excerpt: data.attributes.excerpt,
    slug: data.attributes.slug,
    tags: data.attributes.tags.split(', '),
    title: data.attributes.title
  }

  return {
    props: {
      post
    }
  }
}

export default Blog
