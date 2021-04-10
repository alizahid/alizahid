import { gql, GraphQLClient } from 'graphql-request'
import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

import { Footer, Header, PostCard } from '../../components'
import { Post } from '../../types'

type Props = {
  posts: Post[]
}

const Blog: NextPage<Props> = ({ posts }) => (
  <>
    <Head>
      <title>Blog / Ali Zahid</title>
      <meta content="My writing" name="description" />
      <meta content="My writing" property="og:description" />
      <meta content="website" property="og:type" />
    </Head>

    <Header />

    <main className="my-12">
      <h1 className="text-2xl font-semibold">Blog</h1>

      <div className="mt-12 grid gap-12 lg:grid-cols-3">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug}>
            <a className="text-black dark:text-white">
              <PostCard post={post} />
            </a>
          </Link>
        ))}
      </div>
    </main>

    <Footer />
  </>
)

export const getStaticProps: GetStaticProps<Props> = async () => {
  const client = new GraphQLClient(process.env.GRAPH_CMS_URL)

  const { posts } = await client.request(gql`
    {
      posts(orderBy: date_DESC) {
        slug
        title
        date
        excerpt
        image {
          height
          width
          url
        }
      }
    }
  `)

  return {
    props: {
      posts
    }
  }
}

export default Blog
