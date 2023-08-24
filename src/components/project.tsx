import Image from 'next/image'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { type FunctionComponent } from 'react'
import { twMerge } from 'tailwind-merge'

import { fetchProjects } from '~/queries/projects'
import { type ProjectLink } from '~/types'

type Props = {
  className?: string
  project: Awaited<ReturnType<typeof fetchProjects>>[number]
}

export const ProjectCard: FunctionComponent<Props> = ({
  className,
  project,
}) => (
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

      <div className="prose prose-neutral prose-a:no-underline max-w-none dark:prose-invert prose-a:text-primary-600 prose-a:dark:text-primary-400">
        <MDXRemote
          components={{
            a: ({ children, href }) => <Link href={href!}>{children}</Link>,
          }}
          source={project.content}
        />
      </div>

      <div className="flex flex-wrap items-start -ml-4 text-sm">
        {(project.links as Array<ProjectLink>).map(({ href, label }, index) => (
          <Link
            className="p-2 mt-4 ml-4 font-medium leading-none text-black rounded-md hover:text-black hover:bg-primary-300 bg-primary-400 dark:bg-primary-600 dark:hover:bg-primary-700 dark:text-white dark:hover:text-white"
            href={href}
            key={`link-${index}`}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  </div>
)
