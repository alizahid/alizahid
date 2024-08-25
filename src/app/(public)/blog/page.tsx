import { type Metadata } from 'next'

import { PostCard } from '~/components/post'
import { fetchPosts } from '~/queries/posts'

export const metadata: Metadata = {
  description: "Things I've written about",
  title: 'Blog × Ali Zahid',
}

export default async function Blog() {
  const posts = await fetchPosts()

  return (
    <main className="flex flex-1 flex-col gap-9">
      <h1 className="text-9">Blog</h1>

      <section className="grid gap-8 lg:grid-cols-2">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </section>
    </main>
  )
}
