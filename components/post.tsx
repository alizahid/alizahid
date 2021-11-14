import { format, isSameYear, parseISO } from 'date-fns'
import Image from 'next/image'
import React, { FunctionComponent } from 'react'

import { Post } from '../types/graph-cms'

type Props = {
  className?: string
  post: Post
}

export const PostCard: FunctionComponent<Props> = ({ className, post }) => {
  const date = parseISO(post.date)

  return (
    <div className={className}>
      <Image
        alt={post.title}
        className="bg-gray-100 rounded-lg dark:bg-gray-900"
        height={400}
        src={post.image.url}
        unoptimized
        width={600}
      />
      <div className="mt-2 text-lg font-medium">{post.title}</div>
      <div className="mt-2 text-gray-800 dark:text-gray-200">
        {post.excerpt}
      </div>
      <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        {format(date, isSameYear(date, new Date()) ? 'MMM d' : 'MMM d, y')}
      </div>
    </div>
  )
}
