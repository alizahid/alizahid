import Image from 'next/image'
import Link from 'next/link'

import { type Projects } from '~/queries/projects'

import { Markdown } from './markdown'

type Props = {
  project: Projects[number]
}

export function ProjectCard({ project }: Props) {
  return (
    <div className="flex items-start gap-4">
      <Image
        alt={project.name}
        height={48}
        src={project.image.url}
        unoptimized
        width={48}
      />

      <div className="flex flex-1 flex-col gap-4">
        <div className="text-4 font-bold">{project.name}</div>

        <Markdown className="space-y-4 text-pretty" content={project.content} />

        <div className="flex flex-wrap items-start gap-4">
          {project.links.map((link) => (
            <Link
              className="rounded-3 bg-accent-a9 px-2 py-1 text-2 font-medium text-accent-contrast outline-none ring-accent-a7 hover:bg-accent-a10 hover:text-accent-contrast focus-visible:ring-2"
              href={link.link}
              key={link.link}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
