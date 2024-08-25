import { Markdown } from '~/components/markdown'
import { PostCard } from '~/components/post'
import { ProjectCard } from '~/components/project'
import { fetchHome } from '~/queries/home'

export default async function Page() {
  const { block, posts, projects } = await fetchHome()

  return (
    <main className="flex flex-1 flex-col gap-9">
      <Markdown className="text-pretty text-4" content={block.content} />

      <section className="flex flex-col gap-6">
        <h2 className="text-8">Recent posts</h2>

        <div className="grid gap-8 lg:grid-cols-2">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-8">Featured projects</h2>

        <div className="grid items-start gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  )
}
