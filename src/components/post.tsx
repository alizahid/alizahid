import { format, isSameYear, parseISO } from 'date-fns'
import Image from 'next/image'
import { type FunctionComponent } from 'react'

import { fetchPosts } from '~/queries/posts'

type Props = {
  className?: string
  post: Awaited<ReturnType<typeof fetchPosts>>[number]
}

export const PostCard: FunctionComponent<Props> = ({ className, post }) => {
  const date = parseISO(post.date)

  return (
    <div className={className}>
      <Image
        alt={post.title}
        className="bg-neutral-100 rounded-lg dark:bg-neutral-900"
        height={400}
        src={post.image.url}
        unoptimized
        width={600}
      />

      <div className="mt-2 text-lg font-medium">{post.title}</div>

      <div className="mt-2 text-neutral-800 dark:text-neutral-200">
        {post.excerpt}
      </div>

      <div className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        {format(date, isSameYear(date, new Date()) ? 'MMM d' : 'MMM d, y')}
      </div>
    </div>
  )
}
