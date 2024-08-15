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
        height={64}
        src={project.image.url}
        unoptimized
        width={64}
      />

      <div className="flex flex-1 flex-col">
        <div className="text-4 font-medium">{project.name}</div>

        <Markdown
          className="text-pretty"
          content={project.content}
          overrides={{
            p: 'my-2',
          }}
        />

        <div className="flex flex-wrap items-start gap-2">
          {project.links.map((link) => (
            <Link
              className="rounded-3 bg-jadeA9 px-2 py-1 text-2 text-whiteA12 hover:bg-jadeA10 hover:text-whiteA12"
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
