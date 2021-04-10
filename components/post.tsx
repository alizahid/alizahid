import { format, isSameYear, parseISO } from 'date-fns'
import Image from 'next/image'
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
      <Image
        className="rounded-lg bg-gray-100 dark:bg-gray-900"
        height={Number(post.image.height) / 4}
        src={post.image.url}
        width={Number(post.image.width) / 4}
      />
      <div className="font-medium mt-2">{post.title}</div>
      <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
        {post.excerpt}
      </div>
      <div className="text-sm text-gray-500 mt-2">
        {format(date, isSameYear(date, new Date()) ? 'MMMM d' : 'MMMM d, y')}
      </div>
    </div>
  )
}
