import Image from 'next/image'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { twMerge } from 'tailwind-merge'

import { fetchProjects } from '~/queries/projects'
import { type ProjectLink } from '~/types'

import { Prose } from './prose'

type Props = {
  className?: string
  project: Awaited<ReturnType<typeof fetchProjects>>[number]
}

export function ProjectCard({ className, project }: Props) {
  return (
    <div className={twMerge('flex items-start', className)}>
      <Image
        alt={project.name}
        height={64}
        src={project.image.url}
        unoptimized
        width={64}
      />

      <div className="flex-1 ml-4">
        <div className="text-lg font-semibold">{project.name}</div>

        <Prose>
          <MDXRemote
            components={{
              a: ({ children, href }) => <Link href={href!}>{children}</Link>,
            }}
            source={project.content}
          />
        </Prose>

        <div className="flex flex-wrap items-start -ml-4 text-sm">
          {(project.links as Array<ProjectLink>).map(
            ({ href, label }, index) => (
              <Link
                className="p-2 mt-4 ml-4 font-medium leading-none text-black rounded-md hover:text-black hover:bg-primary-300 bg-primary-400 dark:bg-primary-600 dark:hover:bg-primary-700 dark:text-white dark:hover:text-white"
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
