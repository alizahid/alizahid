import Link from 'next/link'

import { Markdown } from '~/components/markdown'
import { PostCard } from '~/components/post'
import { ProjectCard } from '~/components/project'
import { fetchHome } from '~/queries/home'

export default async function Page() {
  const { block, posts, projects } = await fetchHome()

  return (
    <main className="flex flex-col gap-24">
      <section className="flex flex-col gap-4 text-pretty text-lg">
        <Markdown>{block.content}</Markdown>
      </section>

      <section className="grid gap-8 lg:grid-cols-3">
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

      <section className="grid gap-8 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </main>
  )
}
