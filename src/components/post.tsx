import { format, isSameYear, parseISO } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'

import { type Posts } from '~/queries/posts'

type Props = {
  post: Posts[number]
}

export function PostCard({ post }: Props) {
  const date = parseISO(post.date as string)

  return (
    <Link
      className="flex flex-col overflow-hidden rounded-5 bg-accent-a3 hover:bg-accent-a4"
      href={`/writings/${post.slug}`}
    >
      <Image
        alt={post.title}
        className="bg-gray-a3"
        height={400}
        src={post.image.url}
        unoptimized
        width={600}
      />

      <div className="flex flex-col gap-2 p-4">
        <div className="text-pretty text-4 font-semibold">{post.title}</div>

        <div className="text-pretty text-gray-a12">{post.excerpt}</div>

        <div className="text-2 text-gray-a11">
          {format(date, isSameYear(date, new Date()) ? 'MMM d' : 'MMM d, y')}
        </div>
      </div>
    </Link>
  )
}
