import { gql, GraphQLClient } from 'graphql-request'
import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

import {
  Header,
  HomeMoreLink,
  HomeTitle,
  PostCard,
  ProjectCard,
  SocialLinks
} from '../components'
import { Post, Project } from '../types'

type Props = {
  posts: Post[]
  projects: Project[]
}

const Home: NextPage<Props> = ({ posts, projects }) => (
  <>
    <Head>
      <title>Ali Zahid</title>
      <meta content="About me" name="description" />
      <meta content="About me" property="og:description" />
      <meta content="website" property="og:type" />
    </Head>

    <main className="grid gap-12 lg:grid-cols-3">
      <section>
        <Header />

        <p className="mt-8 text-sm">
          Hello. I&#39;m Ali Zahid. I love to build cool stuff. Check out my{' '}
          <Link href="/playground">
            <a>playground</a>
          </Link>
          . And here&#39;s my{' '}
          <Link href="https://media.graphcms.com/ymS9WJsRhadi8AMRHvQR">
            <a>resume</a>
          </Link>
          .
        </p>
        <p className="mt-4 text-sm">
          I started my journey when I was 8 years old with FrontPage. Moved on
          to Dreamweaver a few years later and finally learnt how to code. Over
          the last 20 years or so, I&#39;ve played with dozens of technologies
          and programming languages before finally settling on the JavaScript
          ecosystem focusing on Node, React, and React Native.
        </p>
        <p className="mt-4 text-sm">
          During my career, I&#39;ve worked with large enterprises, government
          organizations, Academy and Emmy award-winning filmmakers, e-sports
          teams, student groups, and everything in between, to help realize
          their ideas.
        </p>
        <p className="mt-4 text-sm">
          Are you looking for help building your next epic idea or product?{' '}
          <Link href="mailto:ali.zahid@live.com">
            <a>Reach out</a>
          </Link>{' '}
          and see if we can work together.
        </p>

        <SocialLinks className="mt-12" />
      </section>

      <section className="flex flex-col">
        <HomeTitle className="self-start" href="/blog">
          Blog
        </HomeTitle>

        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug}>
            <a className="text-black dark:text-white mt-12">
              <PostCard post={post} />
            </a>
          </Link>
        ))}

        <HomeMoreLink className="self-start mt-12" href="/blog" />
      </section>

      <section className="flex flex-col">
        <HomeTitle className="self-start" href="/playground">
          Playground
        </HomeTitle>

        {projects.map((project) => (
          <ProjectCard className="mt-12" key={project.slug} project={project} />
        ))}

        <HomeMoreLink className="self-start mt-12" href="/playground" />
      </section>
    </main>
  </>
)

export const getStaticProps: GetStaticProps<Props> = async () => {
  const client = new GraphQLClient(process.env.GRAPH_CMS_URL)

  const { posts, projects } = await client.request(gql`
    {
      posts(orderBy: date_DESC, first: 3) {
        slug
        title
        date
        excerpt
        image {
          height
          width
          url
        }
      }
      projects(where: { featured: true }) {
        slug
        name
        content
        image {
          height
          width
          url
        }
        links
      }
    }
  `)

  return {
    props: {
      posts,
      projects
    }
  }
}

export default Home
