import { format, isSameYear, parseISO } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'

import { Markdown } from '~/components/markdown'
import { fetchHome } from '~/queries/home'

export default async function Page() {
  const { block, posts, projects } = await fetchHome()

  return (
    <main className="flex flex-col gap-9">
      <Markdown className="text-pretty text-4" content={block.content} />

      <section className="flex flex-col gap-8">
        <h2 className="text-8 font-bold">My writings</h2>

        <div className="gap-8 space-y-8 sm:columns-2 lg:columns-3">
          {posts.map((post) => {
            const date = parseISO(post.date as string)

            return (
              <Link
                className="flex flex-col gap-2 overflow-hidden"
                href={`/writings/${post.slug}`}
                key={post.slug}
              >
                <Image
                  alt={post.title}
                  className="rounded-4"
                  height={320}
                  src={post.image.url}
                  unoptimized
                  width={640}
                />

                <div className="text-pretty text-4 font-semibold">
                  {post.title}
                </div>

                <div className="text-pretty text-gray-a12">{post.excerpt}</div>

                <div className="text-2 text-gray-a11">
                  {format(
                    date,
                    isSameYear(date, new Date()) ? 'MMM d' : 'MMM d, y',
                  )}
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="flex flex-col gap-8">
        <h2 className="text-8 font-bold">My works</h2>

        <div className="gap-8 space-y-8 lg:columns-2">
          {projects.map((project) => (
            <div
              className="flex items-start gap-4 overflow-hidden"
              key={project.slug}
            >
              <Image
                alt={project.name}
                height={48}
                src={project.image.url}
                unoptimized
                width={48}
              />

              <div className="flex flex-1 flex-col gap-4">
                <div className="text-4 font-semibold">{project.name}</div>

                <Markdown
                  className="space-y-4 text-pretty"
                  content={project.content}
                />

                <div className="flex flex-wrap items-start gap-4">
                  {project.links.map((link) => (
                    <Link
                      className="rounded-3 bg-accent-a9 px-2 py-1 text-2 font-medium text-white-a12 hover:bg-accent-a10 hover:text-white-a12 dark:text-black-a12 dark:hover:text-black-a12"
                      href={link.link}
                      key={link.link}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
