import Image from 'next/image'
import Link from 'next/link'
import React, { FunctionComponent } from 'react'
import Markdown from 'react-markdown'

import { Project, ProjectLink } from '../types'

type Props = {
  className?: string
  project: Project
}

export const ProjectCard: FunctionComponent<Props> = ({
  className,
  project
}) => (
  <div className={className}>
    <div className="flex items-center">
      <Image
        alt={project.name}
        height={64}
        src={project.image.url}
        unoptimized
        width={64}
      />
      <div className="ml-4 font-medium">{project.name}</div>
    </div>

    <Markdown
      className="text-sm text-gray-600 dark:text-gray-400"
      components={{
        a({ children, href }) {
          return (
            <Link href={String(href)}>
              <a>{children}</a>
            </Link>
          )
        },
        p({ children }) {
          return <p className="mt-2 first:mt-4">{children}</p>
        }
      }}>
      {project.content}
    </Markdown>

    <div className="flex flex-wrap items-start -ml-4 text-sm">
      {(project.links as ProjectLink[]).map(({ href, label }, index) => (
        <Link href={href} key={`link-${index}`}>
          <a className="p-2 mt-4 ml-4 leading-none text-black rounded-md bg-emerald-200 hover:bg-emerald-300 dark:bg-emerald-800 dark:hover:bg-emerald-700 hover:text-black dark:text-white dark:hover:text-white">
            {label}
          </a>
        </Link>
      ))}
    </div>
  </div>
)
