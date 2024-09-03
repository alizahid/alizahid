import { type Metadata } from 'next'

import { PostCard } from '~/components/post'
import { fetchPosts } from '~/queries/posts'

export const metadata: Metadata = {
  description: "Things I've written about",
  title: 'Writings × Ali Zahid',
}

export default async function Page() {
  const posts = await fetchPosts()

  return (
    <main className="flex flex-1 flex-col gap-9">
      <h1 className="text-9 font-bold">Writings</h1>

      <section className="gap-6 space-y-6 lg:columns-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </section>
    </main>
  )
}
