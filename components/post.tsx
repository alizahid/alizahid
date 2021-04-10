import { format, isSameYear, parseISO } from 'date-fns'
import React, { FunctionComponent } from 'react'

import { Post } from '../types'

type Props = {
  className?: string
  post: Post
}

export const PostCard: FunctionComponent<Props> = ({ className, post }) => {
  const date = parseISO(post.date)

  return (
    <div className={className}>
      <img
        alt={post.title}
        className="rounded-lg bg-gray-100 dark:bg-gray-900"
        height={400}
        src={post.image.url}
        width={600}
      />
      <div className="font-medium mt-2">{post.title}</div>
      <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
        {post.excerpt}
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
        {format(date, isSameYear(date, new Date()) ? 'MMMM d' : 'MMMM d, y')}
      </div>
    </div>
  )
}
