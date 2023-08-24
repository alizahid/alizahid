import { ProjectCard } from '~/components/project'
import { fetchProjects } from '~/queries/projects'

{
  /* <Head>
<title>Playground &#215; Ali Zahid</title>
<meta content="My works" name="description" />
<meta content="My works" property="og:description" />
<meta content="website" property="og:type" />
</Head> */
}

export default async function Playground() {
  const projects = await fetchProjects()

  const featured = projects.filter(({ featured }) => featured === true)
  const other = projects.filter(({ featured }) => featured !== true)

  return (
    <>
      <main className="flex flex-col gap-12">
        <h1 className="text-2xl font-bold lg:text-4xl">Playground</h1>

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
    </>
  )
}
