import { type Metadata } from 'next'

import { ProjectCard } from '~/components/project'
import { fetchProjects } from '~/queries/projects'

export const metadata: Metadata = {
  title: 'Playground × Ali Zahid',
}

export default async function Page() {
  const projects = await fetchProjects()

  return (
    <main className="flex flex-grow flex-col gap-9">
      <h1 className="text-9 font-bold">Playground</h1>

      <div className="flex flex-col gap-8 md:hidden">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <div className="hidden grid-cols-2 gap-8 md:grid">
        {[0, 1].map((column) => (
          <div className="flex flex-col gap-8" key={column}>
            {projects
              .filter((project, index) => index % 2 === column)
              .map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
          </div>
        ))}
      </div>
    </main>
  )
}
