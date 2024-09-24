import Image from 'next/image'
import Link from 'next/link'

import { type Posts } from '~/queries/posts'

type Props = {
  post: Posts[number]
}

export function PostCard({ post }: Props) {
  return (
    <Link
      className="flex flex-col gap-2 overflow-hidden"
      href={`/writings/${post.slug}`}
    >
      <Image
        alt={post.title}
        className="rounded-4"
        height={320}
        src={post.image.url}
        unoptimized
        width={640}
      />

      <div className="text-pretty text-4 font-bold">{post.title}</div>

      <div className="text-pretty text-gray-a12">{post.excerpt}</div>
    </Link>
  )
}
