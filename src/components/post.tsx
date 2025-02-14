import { format, isSameYear, parseISO } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'

import type { Posts } from '~/queries/posts'

type Props = {
	post: Posts[number]
}

export function PostCard({ post }: Props) {
	const date = parseISO(post.date as string)

	return (
		<Link
			className="flex flex-col bg-neutral-50 outline-none grayscale hover:grayscale-0 focus-visible:bg-neutral-200"
			href={`/blog/${post.slug}`}
		>
			<Image
				alt={post.title}
				height={400}
				src={post.image.url}
				unoptimized
				width={600}
			/>

			<div className="flex flex-1 flex-col gap-2 p-4">
				<div className="text-pretty font-bold text-xl">{post.title}</div>

				<div className="text-pretty">{post.excerpt}</div>

				<div className="mt-auto text-neutral-600 text-sm">
					{format(date, isSameYear(date, new Date()) ? 'MMMM d' : 'MMMM d, y')}
				</div>
			</div>
		</Link>
	)
}
