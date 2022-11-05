import { type GetStaticProps, type NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { PostCard } from '~/components/post'
import { ProjectCard } from '~/components/project'
import { SocialLinks } from '~/components/social'
import { fetchHome } from '~/queries/home'
import { type Asset, type Post, type Project } from '~/types/graph-cms'

type Props = {
  posts: Array<Post>
  projects: Array<Project>
  resume?: Asset
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
          <Link href="/playground">playground</Link>. And here&#39;s my{' '}
          <Link href={resume?.url ?? ''}>resume</Link>.
        </p>

        <p className="mt-4">
          I started my journey when I was 8 years old with FrontPage. Moved on
          to Dreamweaver a few years later and finally learnt how to code. Over
          the last 20 years or so, I&#39;ve played with dozens of technologies
          and programming languages before finally settling on the JavaScript
          ecosystem focusing on Node, and React Native.
        </p>

        <p className="mt-4">
          During my career, I&#39;ve worked with large enterprises, government
          organizations, Academy and Emmy award-winning filmmakers, e-sports
          teams, student groups, and everything in between, to help realize
          their ideas.
        </p>

        <p className="mt-4">
          Are you looking for help building your next epic idea or product?{' '}
          <Link href="mailto:ali.zahid@live.com">Reach out</Link> and see if we
          can work together.
        </p>

        <div className="flex items-center mt-12">
          <div>Find me on</div>

          <SocialLinks className="ml-4" />
        </div>
      </section>

      <section className="flex flex-col">
        <Link href="/blog">
          <h2 className="-mb-4 text-xl font-semibold text-black lg:text-2xl dark:text-white">
            Recent articles
          </h2>
        </Link>

        {posts.map((post) => (
          <Link
            className="mt-12 text-black dark:text-white"
            href={`/blog/${post.slug}`}
            key={post.slug}
          >
            <PostCard post={post} />
          </Link>
        ))}
      </section>

      <section className="flex flex-col">
        <Link href="/playground">
          <h2 className="-mb-4 text-xl font-semibold text-black lg:text-2xl dark:text-white">
            Featured projects
          </h2>
        </Link>

        {projects.map((project) => (
          <ProjectCard className="mt-12" key={project.slug} project={project} />
        ))}
      </section>
    </main>
  </>
)

export const getStaticProps: GetStaticProps<Props> = async () => {
  const props = await fetchHome()

  return {
    props,
  }
}

export default Home
