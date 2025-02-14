import { BookOpen, Cube } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

import { Markdown } from '~/components/markdown'
import { PostCard } from '~/components/post'
import { ProjectCard } from '~/components/project'
import { fetchHome } from '~/queries/home'

export default async function Page() {
	const { block, posts, projects } = await fetchHome()

	return (
		<main className="flex flex-col gap-32">
			<Markdown
				components={{
					h1({ children }) {
						return <h1 className="font-bold text-6xl">{children}</h1>
					},
				}}
				content={block.content}
			/>

			<section className="flex flex-col gap-8">
				<h2>
					<Link
						className="font-bold text-2xl outline-none focus-visible:bg-neutral-200"
						href="/blog"
					>
						Blog
					</Link>
				</h2>

				<div className="grid gap-8 lg:grid-cols-2">
					{posts.map((post) => (
						<PostCard key={post.slug} post={post} />
					))}
				</div>
			</section>

			<section className="flex flex-col gap-8">
				<h2>
					<Link
						className="font-bold text-2xl outline-none focus-visible:bg-neutral-200"
						href="/playground"
					>
						Playground
					</Link>
				</h2>

				<div className="grid gap-8 lg:grid-cols-2">
					{projects.map((project) => (
						<ProjectCard key={project.slug} project={project} />
					))}
				</div>
			</section>
		</main>
	)
}
