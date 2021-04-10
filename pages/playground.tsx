import { gql, GraphQLClient } from 'graphql-request'
import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

import { Footer, Header, ProjectCard } from '../components'
import { Project } from '../types'

type Props = {
  featured: Project[]
  other: Project[]
  regular: Project[]
}

const Playground: NextPage<Props> = ({ featured, other, regular }) => (
  <>
    <Head>
      <title>Playground / Ali Zahid</title>
      <meta content="My works" name="description" />
      <meta content="My works" property="og:description" />
      <meta content="website" property="og:type" />
    </Head>

    <Header />

    <main className="my-16">
      <h1 className="text-2xl font-semibold">Playground</h1>

      <div className="mt-12 grid gap-12 lg:grid-cols-3">
        {[featured, regular, other].map((projects, index) => (
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

    <Footer />
  </>
)

export const getStaticProps: GetStaticProps<Props> = async () => {
  const client = new GraphQLClient(process.env.GRAPH_CMS_URL)

  const { projects } = await client.request<{
    projects: Project[]
  }>(gql`
    {
      projects(orderBy: order_ASC) {
        slug
        name
        content
        featured
        image {
          height
          width
          url
        }
        links
      }
    }
  `)

  const featured = projects.filter(({ featured }) => featured === true)
  const regular = projects.filter(({ featured }) => featured === false)
  const other = projects.filter(({ featured }) => featured === null)

  return {
    props: {
      featured,
      other,
      regular
    }
  }
}

export default Playground
