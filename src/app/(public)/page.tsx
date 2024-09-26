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

      <section className="flex scroll-mt-8 flex-col gap-8" id="writings">
        <h2 className="text-8 font-bold">Writings</h2>

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

      <section className="flex scroll-mt-8 flex-col gap-8" id="playground">
        <h2 className="text-8 font-bold">Playground</h2>

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

      <section className="flex scroll-mt-8 flex-col gap-8" id="bookmarks">
        <h2 className="text-8 font-bold">Bookmarks</h2>

        <div className="flex flex-col gap-8 md:hidden">
          {links.map((link) => (
            <LinkCard key={link.id} link={link} />
          ))}
        </div>

        <div className="hidden grid-cols-2 gap-8 md:grid">
          {[0, 1].map((column) => (
            <div className="flex flex-col gap-8" key={column}>
              {links
                .filter((link, index) => index % 2 === column)
                .map((link) => (
                  <LinkCard key={link.id} link={link} />
                ))}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
