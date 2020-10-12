import dayjs from 'dayjs'
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
    <a className="block group mt-16 first:mt-0">
      <h2 className="text-xl font-semibold leading-tight text-gray-900 dark:text-gray-100 duration-200 group-hover:text-teal-500">
        {title}
      </h2>
      <div className="my-4 text-gray-700 dark:text-gray-300">{children}</div>
      <footer className="text-gray-600 text-sm">
        {dayjs(date).format('MMMM, YYYY')}
      </footer>
    </a>
  </Link>
)
