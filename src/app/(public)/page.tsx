import { LinkCard } from '~/components/link'
import { Markdown } from '~/components/markdown'
import { PostCard } from '~/components/post'
import { ProjectCard } from '~/components/project'
import { fetchHome } from '~/queries/home'

export default async function Page() {
  const { block, links, posts, projects } = await fetchHome()

  return (
    <main className="flex flex-col gap-9">
      <Markdown className="text-pretty" content={block.content} />

      <section className="flex scroll-mt-8 flex-col gap-6" id="writings">
        <h2 className="text-8 font-bold">Writings</h2>

        <div className="gap-6 space-y-6 lg:columns-2">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section className="flex scroll-mt-8 flex-col gap-6" id="works">
        <h2 className="text-8 font-bold">Works</h2>

        <div className="gap-6 space-y-6 lg:columns-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="flex scroll-mt-8 flex-col gap-6" id="bookmarks">
        <h2 className="text-8 font-bold">Bookmarks</h2>

        <div className="gap-6 space-y-6 lg:columns-2">
          {links.map((link) => (
            <LinkCard key={link.id} link={link} />
          ))}
        </div>
      </section>
    </main>
  )
}
