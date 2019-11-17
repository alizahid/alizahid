import clsx from 'clsx'
import React, { FunctionComponent } from 'react'
import Markdown from 'react-markdown'

import { imagePath } from '../lib'

interface Props {
  className?: string

  body: string
  slug: string
}

export const Body: FunctionComponent<Props> = ({ className, body, slug }) => {
  return (
    <Markdown
      className={clsx('markdown', className)}
      source={body}
      transformImageUri={path => imagePath(slug, path)}
      renderers={{
        paragraph({ children }) {
          if (
            children &&
            children[0] &&
            children.length === 1 &&
            children[0].props &&
            children[0].props.src
          ) {
            return (
              <a className="image" href={children[0].props.src}>
                <figure>{children}</figure>
              </a>
            )
          }

          return <p>{children}</p>
        }
      }}
    />
  )
}
