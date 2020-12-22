import prism from '@mapbox/rehype-prism'
import dayjs from 'dayjs'
import { promises as fs } from 'fs'
import matter from 'gray-matter'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import NextImage from 'next/image'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import { resolve } from 'path'
import React from 'react'

import {
  Footer,
  Header,
  Image,
  Link,
  Screenshot,
  Screenshots
} from '../../components'
import { PostMeta } from '../../types'

type Props = {
  content: unknown
  meta: PostMeta
}

type Params = {
  slug: string
}

const Blog: NextPage<Props> = ({ content, meta }) => (
  <>
    <Head>
      <title>{meta.title} / Blog / Ali Zahid</title>
      <meta content={meta.title} property="og:title" />
      <meta content={meta.excerpt} name="description" />
      <meta content={meta.excerpt} property="og:description" />
      <meta
        content={`https://alizahid.dev/blog/${meta.slug}`}
        property="og:url"
      />
      <meta
        content={`https://alizahid.dev/blog/${meta.slug}/hero.png`}
        property="og:image"
      />
    </Head>

    <Header title="Blog" />

    <main>
      <div className="mb-8">
        <NextImage
          alt={meta.title}
          className="rounded-xl bg-white dark:bg-black"
          height={832 * (1200 / 1800)}
          priority
          src={`/blog/${meta.slug}/hero.png`}
          width={832}
        />
        <div className="text-sm text-gray-600 dark:text-gray-400 mt-8">
          {dayjs(meta.date).format('MMMM, YYYY')}
        </div>
        <h2 className="text-5xl font-semibold my-2">{meta.title}</h2>
        <div className="text-gray-700 dark:text-gray-300">{meta.excerpt}</div>
      </div>
      <section className="post">
        {hydrate(content, {
          components
        })}
      </section>
    </main>

    <Footer />
  </>
)

const components = {
  Image,
  Link,
  Screenshot,
  Screenshots
}

export const getStaticPaths: GetStaticPaths = async () => {
  const path = resolve('posts')

  const files = await fs.readdir(path)

  const paths = files.map((post) => ({
    params: {
      slug: post.slice(0, -4)
    }
  }))

  return {
    fallback: false,
    paths
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params
}) => {
  if (!params) {
    return {
      notFound: true
    }
  }

  const path = resolve('posts', `${params.slug}.mdx`)

  const markdown = await fs.readFile(path, 'utf8')

  const { content, data } = matter(markdown)

  const mdx = await renderToString(content, {
    components,
    mdxOptions: {
      rehypePlugins: [prism]
    }
  })

  const meta: PostMeta = {
    date: dayjs(data.date).toISOString(),
    excerpt: data.excerpt,
    slug: data.slug,
    title: data.title
  }

  return {
    props: {
      content: mdx,
      meta
    }
  }
}

export default Blog
