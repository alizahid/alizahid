import dayjs from 'dayjs'
import NextImage from 'next/image'
import Link from 'next/link'
import React, { FunctionComponent } from 'react'

import { PostMeta } from '../types'

type Props = {
  post: PostMeta
}

export const Post: FunctionComponent<Props> = ({ post }) => (
  <Link href={`/blog/${post.slug}`}>
    <a className="block group">
      <NextImage
        alt={post.title}
        className="rounded-xl bg-white dark:bg-black"
        height={832 * (1200 / 1800)}
        src={`/blog/${post.slug}/hero.png`}
        width={832}
      />
      <h2 className="text-2xl font-semibold mt-4 text-gray-900 dark:text-gray-100 duration-200 group-hover:text-emerald-500">
        {post.title}
      </h2>
      <div className="my-2 text-gray-700 dark:text-gray-300">
        {post.excerpt}
      </div>
      <footer className="text-gray-600 dark:text-gray-400 text-sm">
        {dayjs(post.date).format('MMMM, YYYY')}
      </footer>
    </a>
  </Link>
)
