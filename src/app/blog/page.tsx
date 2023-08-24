import { Metadata } from 'next'
import Link from 'next/link'

import { PostCard } from '~/components/post'
import { fetchPosts } from '~/queries/posts'

export const metadata: Metadata = {
  description: "Things I've written about",
  metadataBase: new URL('https://alizahid.dev'),
  openGraph: {
    type: 'website',
  },
  title: 'Blog × Ali Zahid',
}

export default async function Blog() {
  const posts = await fetchPosts()

  return (
    <main className="flex flex-col gap-12">
      <h1 className="text-2xl font-bold lg:text-4xl">Blog</h1>

      <div className="grid items-start gap-12 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            className="text-gray-12"
            href={`/blog/${post.slug}`}
            key={post.slug}
          >
            <PostCard post={post} />
          </Link>
        ))}
      </div>
    </main>
  )
}
