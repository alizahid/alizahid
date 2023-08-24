import { Metadata } from 'next'
import Link from 'next/link'

import { PostCard } from '~/components/post'
import { ProjectCard } from '~/components/project'
import { Prose } from '~/components/prose'
import { SocialLinks } from '~/components/social'
import { fetchHome } from '~/queries/home'

export const metadata: Metadata = {
  description: '',
  openGraph: {
    type: 'website',
  },
  title: 'Ali Zahid',
}

export default async function Page() {
  const { asset, posts, projects } = await fetchHome()

  return (
    <main className="grid items-start gap-12 lg:grid-cols-3">
      <Prose as="section">
        <h1>I have a patent on blowing minds with epic design.</h1>

        <p>
          Hello. I&#39;m Ali Zahid. I love to build cool stuff. Check out my{' '}
          <Link href="/playground">playground</Link>. And here&#39;s my{' '}
          <Link href={asset.url}>resume</Link>.
        </p>

        <p>
          I started my journey when I was 8 years old with FrontPage. Moved on
          to Dreamweaver a few years later and finally learnt how to code. Over
          the last 20 years or so, I&#39;ve played with dozens of technologies
          and programming languages before finally settling on the JavaScript
          ecosystem focusing on Node, and React Native.
        </p>

        <p>
          During my career, I&#39;ve worked with large enterprises, government
          organizations, Academy and Emmy award-winning filmmakers, e-sports
          teams, student groups, and everything in between, to help realize
          their ideas.
        </p>

        <p>
          Are you looking for help building your next epic idea or product?{' '}
          <Link href="mailto:ali.zahid@live.com">Reach out</Link> and see if we
          can work together.
        </p>

        <div className="flex items-center gap-4 not-prose">
          <div>Find me on</div>

          <SocialLinks />
        </div>
      </Prose>

      <section className="flex flex-col gap-12">
        <Link href="/blog">
          <h2 className="text-xl font-semibold text-gray-12 lg:text-2xl">
            Recent articles
          </h2>
        </Link>

        {posts.map((post) => (
          <Link
            className="text-gray-12"
            href={`/blog/${post.slug}`}
            key={post.slug}
          >
            <PostCard post={post} />
          </Link>
        ))}
      </section>

      <section className="flex flex-col gap-12">
        <Link href="/playground">
          <h2 className="text-xl font-semibold text-gray-12 lg:text-2xl">
            Featured projects
          </h2>
        </Link>

        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </main>
  )
}
