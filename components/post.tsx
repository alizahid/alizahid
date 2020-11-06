import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'
import React, { FunctionComponent } from 'react'

interface Props {
  date: string
  slug: string
  title: string
}

export const Post: FunctionComponent<Props> = ({
  children,
  date,
  slug,
  title
}) => (
  <Link href={`/blog/${slug}`}>
    <a className="block group">
      <figure className="relative w-full pb-hero rounded-lg shadow-sm">
        <Image
          className="rounded-lg"
          layout="fill"
          priority
          src={`/blog/${slug}/hero.png`}
        />
      </figure>
      <h2 className="text-2xl font-medium leading-tight mt-4 text-gray-900 dark:text-gray-100 duration-200 group-hover:text-teal-500">
        {title}
      </h2>
      <div className="my-2 text-gray-700 dark:text-gray-300">{children}</div>
      <footer className="text-gray-600 text-sm">
        {dayjs(date).format('MMMM, YYYY')}
      </footer>
    </a>
  </Link>
)
