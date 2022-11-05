import Markdown from 'markdown-to-jsx'
import Image from 'next/image'
import Link from 'next/link'
import { type FunctionComponent } from 'react'
import { twMerge } from 'tailwind-merge'

import { type ProjectLink } from '~/types'
import { type Project } from '~/types/graph-cms'

type Props = {
  className?: string
  project: Project
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

      <Markdown
        className="text-neutral-800 dark:text-neutral-200"
        options={{
          overrides: {
            a: {
              component: ({ children, href }) => (
                <Link href={href}>{children}</Link>
              ),
            },
            p: {
              props: {
                className: 'mt-2',
              },
            },
          },
        }}
      >
        {project.content}
      </Markdown>

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
