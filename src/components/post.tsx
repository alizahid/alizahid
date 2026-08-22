import { format, isSameYear, parseISO } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'

import { type Posts } from '~/queries/posts'

import { Highlight } from './highlight'

type Props = {
  post: Posts[number]
}

export function PostCard({ post }: Props) {
  const date = parseISO(post.date as string)

  return (
    <Link
      className="flex gap-4 self-start outline-none focus-visible:bg-neutral-200"
      href={`/blog/${post.slug}`}
    >
      <figure className="w-24">
        <Image
          alt={post.title}
          height={200}
          src={post.icon.url}
          unoptimized
          width={200}
        />
      </figure>

      <div className="flex flex-1 flex-col items-start gap-2">
        <div className="text-pretty font-bold text-xl leading-tight">
          <Highlight show>{post.title}</Highlight>
        </div>

        <div className="text-pretty">{post.excerpt}</div>

        <div className="text-neutral-600 text-sm tabular-nums">
          {format(date, isSameYear(date, new Date()) ? 'MMMM d' : 'MMMM d, y')}
        </div>
      </div>
    </Link>
  )
}
