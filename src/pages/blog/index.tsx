import { type GetStaticProps, type NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { PostCard } from '~/components/post'
import { fetchPosts } from '~/queries/posts'
import { type Post } from '~/types/graph-cms'

type Props = {
  posts: Array<Post>
}

const Blog: NextPage<Props> = ({ posts }) => (
  <>
    <Head>
      <title>Blog &#215; Ali Zahid</title>
      <meta content="My writing" name="description" />
      <meta content="My writing" property="og:description" />
      <meta content="website" property="og:type" />
    </Head>

    <main>
      <h1 className="text-2xl font-bold lg:text-4xl">Blog</h1>

      <div className="grid items-start gap-12 mt-12 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            className="text-black dark:text-white"
            href={`/blog/${post.slug}`}
            key={post.slug}
          >
            <PostCard post={post} />
          </Link>
        ))}
      </div>
    </main>
  </>
)

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await fetchPosts()

  return {
    props: {
      posts,
    },
  }
}

export default Blog