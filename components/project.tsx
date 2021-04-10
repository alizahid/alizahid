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
        height={Number(project.image.height) / 10}
        src={project.image.url}
        width={Number(project.image.width) / 10}
      />
      <div className="font-medium ml-4">{project.name}</div>
    </div>

    <Markdown
      className="text-sm text-gray-600 dark:text-gray-400"
      renderers={{
        link({ children, href }) {
          return (
            <Link href={href}>
              <a>{children}</a>
            </Link>
          )
        },
        paragraph({ children }) {
          return <p className="mt-2 first:mt-4">{children}</p>
        }
      }}>
      {project.content}
    </Markdown>

    <div className="flex flex-wrap items-start text-sm -ml-4">
      {(project.links as ProjectLink[]).map(({ href, label }, index) => (
        <Link href={href} key={`link-${index}`}>
          <a className="mt-4 ml-4">{label}</a>
        </Link>
      ))}
    </div>
  </div>
)
