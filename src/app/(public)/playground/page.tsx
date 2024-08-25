import { type Metadata } from 'next'

import { ProjectCard } from '~/components/project'
import { fetchProjects } from '~/queries/projects'

export const metadata: Metadata = {
  description: "Things I've built",
  title: 'Playground × Ali Zahid',
}

export default async function Playground() {
  const projects = await fetchProjects()

  return (
    <main className="flex flex-1 flex-col gap-9">
      <h1 className="text-9">Playground</h1>

      <section className="grid gap-8 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </main>
  )
}
