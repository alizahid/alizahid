import Image from 'next/image'
import Link from 'next/link'

import type { Links } from '~/queries/links'

import { Markdown } from './markdown'

type Props = {
	link: Links[number]
}

export function LinkCard({ link }: Props) {
	return (
		<Link
			className="flex items-start gap-4 bg-neutral-50 p-4 outline-none grayscale hover:grayscale-0 focus-visible:bg-neutral-200"
			href={link.url}
			rel="noopener"
			target="_blank"
		>
			<Image
				alt={link.title}
				height={48}
				src={link.image}
				unoptimized
				width={48}
			/>

			<div className="flex flex-1 flex-col gap-4">
				<div className="font-bold text-xl">{link.title}</div>

				<Markdown className="space-y-2" content={link.description} />
			</div>
		</Link>
	)
}
