import { gql, GraphQLClient } from 'graphql-request'
import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

import { ProjectCard } from '../components/project'
import { Project, Query } from '../types'

type Props = {
  featured: Array<Project>
  other: Array<Project>
  regular: Array<Project>
}

const Playground: NextPage<Props> = ({ featured, other, regular }) => (
  <>
    <Head>
      <title>Playground &#8226; Ali Zahid</title>
      <meta content="My works" name="description" />
      <meta content="My works" property="og:description" />
      <meta content="website" property="og:type" />
    </Head>

    <main>
      <h1 className="text-2xl font-bold lg:text-4xl">Playground</h1>

      <div className="grid items-start gap-12 mt-12 lg:grid-cols-3">
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
  </>
)

export const getStaticProps: GetStaticProps<Props> = async () => {
  const client = new GraphQLClient(process.env.GRAPH_CMS_URL)

  const { projects } = await client.request<Pick<Query, 'projects'>>(gql`
    {
      projects(orderBy: order_ASC) {
        slug
        name
        content
        featured
        image {
          height
          width
          url(transformation: { image: { resize: { width: 128 } } })
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
