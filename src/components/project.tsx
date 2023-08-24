import Image from 'next/image'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

import { fetchProjects } from '~/queries/projects'
import { type ProjectLink } from '~/types'

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

      <div className="flex-1 flex flex-col gap-4">
        <div className="text-xl font-semibold">{project.name}</div>

        <div className="flex flex-col gap-2">
          <Markdown>{project.content}</Markdown>
        </div>

        <div className="flex flex-wrap items-start gap-4">
          {(project.links as Array<ProjectLink>).map(
            ({ href, label }, index) => (
              <Link
                className="p-2 font-medium leading-none text-gray-1 hover:text-gray-1 rounded-md hover:bg-grass-10 bg-grass-9"
                href={href}
                key={`link-${index}`}
              >
                {label}
              </Link>
            ),
          )}
        </div>
      </div>
    </div>
  )
}
