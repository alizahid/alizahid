import { type Metadata } from 'next'

import { ProjectCard } from '~/components/project'
import { fetchProjects } from '~/queries/projects'

export const metadata: Metadata = {
  description: "Things I've built",
  title: 'Works × Ali Zahid',
}

export default async function Page() {
  const projects = await fetchProjects()

  return (
    <main className="flex flex-1 flex-col gap-9">
      <h1 className="text-9 font-bold">Works</h1>

      <section className="gap-6 space-y-6 lg:columns-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </main>
  )
}
