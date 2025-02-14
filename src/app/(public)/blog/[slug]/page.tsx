import { format, isSameYear, parseISO } from 'date-fns'
import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import { Markdown } from '~/components/markdown'
import { fetchPost } from '~/queries/post'
import { fetchSlugs } from '~/queries/posts'

export async function generateStaticParams() {
	const posts = await fetchSlugs()

	return posts.map(({ slug }) => ({
		slug,
	}))
}

type Props = {
	params: Promise<{
		slug: string
	}>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params

	const post = await fetchPost(slug)

	if (!post) {
		notFound()
	}

	return {
		description: post.excerpt,
		title: `${post.title} × Blog × Ali Zahid`,
	}
}

export default async function Page({ params }: Props) {
	const { slug } = await params

	const post = await fetchPost(slug)

	if (!post) {
		notFound()
	}

	const date = parseISO(post.date as string)

	return (
		<main className="flex flex-col gap-8">
			<div className="flex flex-col gap-4">
				<h1 className="font-bold text-6xl">{post.title}</h1>

				<div className="font-medium text-xl">{post.excerpt}</div>

				<div className="text-neutral-600 text-sm">
					{format(date, isSameYear(date, new Date()) ? 'MMMM d' : 'MMMM d, y')}
				</div>
			</div>

			<Image
				alt={post.title}
				className="bg-neutral-100"
				height={1200}
				src={post.image.url}
				unoptimized
				width={1800}
			/>

			<Markdown content={post.content} />
		</main>
	)
}
