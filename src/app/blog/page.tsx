import { Metadata } from 'next'
import Link from 'next/link'

import { PostCard } from '~/components/post'
import { fetchPosts } from '~/queries/posts'

export const metadata: Metadata = {
  description: "Things I've written about",
  title: 'Blog × Ali Zahid',
}

export default async function Blog() {
  const posts = await fetchPosts()

  return (
    <main className="flex flex-col gap-12">
      <h1 className="text-4xl font-bold">Blog</h1>

      <section className="grid gap-8 lg:grid-cols-2">
        {posts.map((post) => (
          <Link
            className="text-gray-12"
            href={`/blog/${post.slug}`}
            key={post.slug}
          >
            <PostCard post={post} />
          </Link>
        ))}
      </section>
    </main>
  )
}
