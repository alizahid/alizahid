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
    <Link className="flex flex-col gap-2" href={`/blog/${post.slug}`}>
      <Image
        alt={post.title}
        className="rounded-4 bg-sageA3"
        height={400}
        src={post.image.url}
        unoptimized
        width={600}
      />

      <div className="text-4 font-medium">{post.title}</div>

      <div className="text-pretty text-sageA12">{post.excerpt}</div>

      <div className="text-2 text-sageA11">
        {format(date, isSameYear(date, new Date()) ? 'MMM d' : 'MMM d, y')}
      </div>
    </Link>
  )
}
