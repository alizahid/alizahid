import type { Metadata } from 'next'

import { PostCard } from '~/components/post'
import { fetchPosts } from '~/queries/posts'

export const metadata: Metadata = {
	title: 'Blog × Ali Zahid',
}

export default async function Page() {
	const posts = await fetchPosts()

	return (
		<main className="flex flex-grow flex-col gap-16">
			<h1 className="font-bold text-6xl">Blog</h1>

			<div className="-mx-8 grid gap-8 lg:mx-0 lg:grid-cols-2">
				{posts.map((post) => (
					<PostCard key={post.slug} post={post} />
				))}
			</div>
		</main>
	)
}
