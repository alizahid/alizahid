import Image from 'next/image'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

import { fetchProjects } from '~/queries/projects'

import { Markdown } from './markdown'

type Props = {
  className?: string
  project: Awaited<ReturnType<typeof fetchProjects>>[number]
}

export function ProjectCard({ className, project }: Props) {
  return (
    <div className={twMerge('flex items-start gap-4', className)}>
      <Image
        alt={project.name}
        height={64}
        src={project.image.url}
        unoptimized
        width={64}
      />

      <div className="flex flex-1 flex-col gap-2">
        <div className="text-xl font-semibold">{project.name}</div>

        <div className="flex flex-col gap-2 text-pretty">
          <Markdown>{project.content}</Markdown>
        </div>

        <div className="flex flex-wrap items-start gap-2">
          {project.links.map(({ label, link }, index) => (
            <Link
              className="rounded-md bg-accent-9 px-2 py-1 text-sm font-medium leading-tight text-white"
              href={link}
              key={`link-${index}`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
