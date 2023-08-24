import { format, isSameYear, parseISO } from 'date-fns'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

import { fetchPosts } from '~/queries/posts'

type Props = {
  className?: string
  post: Awaited<ReturnType<typeof fetchPosts>>[number]
}

export function PostCard({ className, post }: Props) {
  const date = parseISO(post.date)

  return (
    <div className={twMerge('flex flex-col gap-2', className)}>
      <Image
        alt={post.title}
        className="bg-gray-3 rounded-lg"
        height={400}
        src={post.image.url}
        unoptimized
        width={600}
      />

      <div className="text-lg font-medium">{post.title}</div>

      <div className="text-gray-11">{post.excerpt}</div>

      <div className="text-sm text-gray-12">
        {format(date, isSameYear(date, new Date()) ? 'MMM d' : 'MMM d, y')}
      </div>
    </div>
  )
}
