import { promises as fs } from 'fs'
import matter from 'gray-matter'
import { groupBy, sortBy } from 'lodash'
import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import { resolve } from 'path'
import React from 'react'

import {
  Footer,
  Header,
  Project,
  ProjectContent,
  ProjectFooter,
  ProjectLink
} from '../components'
import { ProjectMeta } from '../types'

type Project = {
  content: unknown
  meta: ProjectMeta
}

type Props = {
  projects: Project[]
}

const Playground: NextPage<Props> = ({ projects }) => (
  <>
    <Head>
      <title>Playground / Ali Zahid</title>
      <meta content="My works" name="description" />
      <meta content="My works" property="og:description" />
      <meta content="website" property="og:type" />
    </Head>

    <Header title="Playground" />

    <main className="grid lg:grid-cols-2 gap-16">
      {Object.values(groupBy(projects, 'meta.side')).map((projects, index) => (
        <section key={index}>
          {sortBy(projects, 'meta.order').map((project) => (
            <Project
              content={hydrate(project.content, {
                components
              })}
              key={project.meta.slug}
              meta={project.meta}
            />
          ))}
        </section>
      ))}
    </main>

    <Footer />
  </>
)

const components = {
  Content: ProjectContent,
  Footer: ProjectFooter,
  Link: ProjectLink
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const path = resolve('projects')

  const files = await fs.readdir(path)

  const projects: Project[] = await Promise.all(
    files.map(async (file) => {
      const path = resolve('projects', file)

      const markdown = await fs.readFile(path, 'utf8')

      const { content, data } = matter(markdown)

      const mdx = await renderToString(content, {
        components
      })

      return {
        content: mdx,
        meta: data as ProjectMeta
      }
    })
  )

  return {
    props: {
      projects
    }
  }
}

export default Playground
