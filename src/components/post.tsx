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
        className="-mx-4 max-w-[100vw] bg-gray-3 lg:mx-0 lg:max-w-full lg:rounded-lg"
        height={400}
        src={post.image.url}
        unoptimized
        width={600}
      />

      <div className="text-xl font-semibold">{post.title}</div>

      <div className="text-pretty text-gray-12">{post.excerpt}</div>

      <div className="text-sm text-gray-11">
        {format(date, isSameYear(date, new Date()) ? 'MMM d' : 'MMM d, y')}
      </div>
    </div>
  )
}
