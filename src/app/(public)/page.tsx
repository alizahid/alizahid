import { BookOpen, Cube } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

import { Markdown } from '~/components/markdown'
import { PostCard } from '~/components/post'
import { ProjectCard } from '~/components/project'
import { fetchHome } from '~/queries/home'

export default async function Page() {
  const { block, posts, projects } = await fetchHome()

  return (
    <main className="flex flex-col gap-9">
      <Markdown className="text-pretty" content={block.content} />

      <section className="flex flex-col gap-8">
        <Link className="flex items-center gap-4 text-gray-a12" href="/blog">
          <BookOpen className="size-6" weight="duotone" />

          <h2 className="text-8 font-bold">Blog</h2>
        </Link>

        <div className="flex flex-col gap-8 md:hidden">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="hidden grid-cols-2 gap-8 md:grid">
          {[0, 1].map((column) => (
            <div className="flex flex-col gap-8" key={column}>
              {posts
                .filter((post, index) => index % 2 === column)
                .map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-8">
        <Link
          className="flex items-center gap-4 text-gray-a12"
          href="/playground"
        >
          <Cube className="size-6" weight="duotone" />

          <h2 className="text-8 font-bold">Playground</h2>
        </Link>

        <div className="flex flex-col gap-8 md:hidden">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="hidden grid-cols-2 gap-8 md:grid">
          {[0, 1].map((column) => (
            <div className="flex flex-col gap-8" key={column}>
              {projects
                .filter((project, index) => index % 2 === column)
                .map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
