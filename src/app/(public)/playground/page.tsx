import type { Metadata } from 'next'

import { ProjectCard } from '~/components/project'
import { fetchProjects } from '~/queries/projects'

export const metadata: Metadata = {
	title: 'Playground × Ali Zahid',
}

export default async function Page() {
	const projects = await fetchProjects()

	return (
		<main className="flex flex-grow flex-col gap-16">
			<h1 className="font-bold text-6xl">Playground</h1>

			<div className="grid gap-8 lg:grid-cols-2">
				{projects.map((project) => (
					<ProjectCard key={project.slug} project={project} />
				))}
			</div>
		</main>
	)
}
