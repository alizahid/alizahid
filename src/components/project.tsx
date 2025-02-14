import Image from 'next/image'
import Link from 'next/link'

import type { Projects } from '~/queries/projects'

import { Markdown } from './markdown'

type Props = {
	project: Projects[number]
}

export function ProjectCard({ project }: Props) {
	return (
		<div className="flex items-start gap-4 bg-neutral-50 p-4 grayscale hover:grayscale-0">
			<Image
				alt={project.name}
				height={48}
				src={project.image.url}
				unoptimized
				width={48}
			/>

			<div className="flex flex-1 flex-col gap-2">
				<div className="font-bold text-xl">{project.name}</div>

				<Markdown className="space-y-2" content={project.content} />

				<div className="flex flex-wrap items-start gap-4">
					{project.links.map((link) => (
						<Link
							className="font-medium outline-none focus-visible:bg-neutral-200"
							href={link.link}
							key={link.link}
						>
							{link.label}
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}
