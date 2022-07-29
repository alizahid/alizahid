import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

import { ProjectCard } from '../components/project'
import { fetchProjects } from '../queries/projects'
import { Project } from '../types/graph-cms'

type Props = {
  featured: Array<Project>
  other: Array<Project>
}

const Playground: NextPage<Props> = ({ featured, other }) => (
  <>
    <Head>
      <title>Playground &#215; Ali Zahid</title>
      <meta content="My works" name="description" />
      <meta content="My works" property="og:description" />
      <meta content="website" property="og:type" />
    </Head>

    <main>
      <h1 className="text-2xl font-bold lg:text-4xl">Playground</h1>

      <div className="grid items-start gap-12 mt-12 lg:grid-cols-2">
        {[featured, other].map((projects, index) => (
          <section key={index}>
            {projects.map((project) => (
              <ProjectCard
                className="mt-12 first:mt-0"
                key={project.slug}
                project={project}
              />
            ))}
          </section>
        ))}
      </div>
    </main>
  </>
)

export const getStaticProps: GetStaticProps<Props> = async () => {
  const props = await fetchProjects()

  return {
    props
  }
}

export default Playground
