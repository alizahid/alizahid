import { gql, GraphQLClient } from 'graphql-request'
import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

import { PostCard } from '../components/post'
import { ProjectCard } from '../components/project'
import { SocialLinks } from '../components/social'
import { Post, Project, Query } from '../types'

type Props = {
  posts: Array<Post>
  projects: Array<Project>
  resume?: string
}

const Home: NextPage<Props> = ({ posts, projects, resume }) => (
  <>
    <Head>
      <title>Ali Zahid</title>
      <meta content="About me" name="description" />
      <meta content="About me" property="og:description" />
      <meta content="website" property="og:type" />
    </Head>

    <main className="grid items-start gap-12 lg:grid-cols-3">
      <section>
        <h1 className="text-2xl font-bold lg:text-4xl">
          I have a patent on blowing minds with epic design.
        </h1>

        <p className="mt-8">
          Hello. I&#39;m Ali Zahid. I love to build cool stuff. Check out my{' '}
          <Link href="/playground">
            <a>playground</a>
          </Link>
          . And here&#39;s my{' '}
          <Link href={resume ?? ''}>
            <a>resume</a>
          </Link>
          .
        </p>
        <p className="mt-4">
          I started my journey when I was 8 years old with FrontPage. Moved on
          to Dreamweaver a few years later and finally learnt how to code. Over
          the last 20 years or so, I&#39;ve played with dozens of technologies
          and programming languages before finally settling on the JavaScript
          ecosystem focusing on Node, React, and React Native.
        </p>
        <p className="mt-4">
          During my career, I&#39;ve worked with large enterprises, government
          organizations, Academy and Emmy award-winning filmmakers, e-sports
          teams, student groups, and everything in between, to help realize
          their ideas.
        </p>
        <p className="mt-4">
          Are you looking for help building your next epic idea or product?{' '}
          <Link href="mailto:ali.zahid@live.com">
            <a>Reach out</a>
          </Link>{' '}
          and see if we can work together.
        </p>

        <div className="flex items-center mt-12">
          <div>Find me on</div>
          <SocialLinks className="ml-4" />
        </div>
      </section>

      <section className="flex flex-col">
        <h2 className="-mb-4 text-xl font-semibold text-black lg:text-2xl dark:text-white">
          Recent articles
        </h2>

        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug}>
            <a className="mt-12 text-black dark:text-white">
              <PostCard post={post} />
            </a>
          </Link>
        ))}
      </section>

      <section className="flex flex-col">
        <h2 className="-mb-4 text-xl font-semibold text-black lg:text-2xl dark:text-white">
          Featured projects
        </h2>

        {projects.map((project) => (
          <ProjectCard className="mt-12" key={project.slug} project={project} />
        ))}
      </section>
    </main>
  </>
)

export const getStaticProps: GetStaticProps<Props> = async () => {
  const client = new GraphQLClient(process.env.GRAPH_CMS_URL)

  const { asset, posts, projects } = await client.request<
    Pick<Query, 'asset' | 'posts' | 'projects'>
  >(gql`
    {
      asset(where: { id: "cknafmzfk07zo0c61dqx7gq3h" }) {
        url
      }
      posts(orderBy: date_DESC, first: 3) {
        slug
        title
        date
        excerpt
        image {
          height
          width
          url(transformation: { image: { resize: { width: 600 } } })
        }
      }
      projects(where: { featured: true }) {
        slug
        name
        content
        image {
          height
          width
          url(transformation: { image: { resize: { width: 128 } } })
        }
        links
      }
    }
  `)

  return {
    props: {
      posts,
      projects,
      resume: asset?.url
    }
  }
}

export default Home
