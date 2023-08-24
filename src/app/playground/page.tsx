import { Metadata } from 'next'

import { ProjectCard } from '~/components/project'
import { fetchProjects } from '~/queries/projects'

export const metadata: Metadata = {
  description: "Things I've built",
  metadataBase: new URL('https://alizahid.dev'),
  openGraph: {
    type: 'website',
  },
  title: 'Playground × Ali Zahid',
}

export default async function Playground() {
  const projects = await fetchProjects()

  const featured = projects.filter(({ featured }) => featured === true)
  const other = projects.filter(({ featured }) => featured !== true)

  return (
    <main className="flex flex-col gap-12">
      <h1 className="text-2xl font-extrabold lg:text-4xl">Playground</h1>

      <div className="grid items-start gap-12 lg:grid-cols-2">
        {[featured, other].map((projects, index) => (
          <section className="flex flex-col gap-12" key={index}>
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </section>
        ))}
      </div>
    </main>
  )
}
