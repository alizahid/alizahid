import { type Metadata } from 'next'

import { PostCard } from '~/components/post'
import { fetchPosts } from '~/queries/posts'

export const metadata: Metadata = {
  title: 'Blog × Ali Zahid',
}

export default async function Page() {
  const posts = await fetchPosts()

  return (
    <main className="flex flex-grow flex-col gap-9">
      <h1 className="text-9 font-bold">Blog</h1>

      <div className="flex flex-col gap-8 md:hidden">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      <div className="hidden grid-cols-2 gap-8 md:grid">
        {[0, 1].map((column) => (
          <div className="flex flex-col gap-8" key={column}>
            {posts
              .filter((post, index) => index % 2 === column)
              .map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
          </div>
        ))}
      </div>
    </main>
  )
}
