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
      <Image
        alt={title}
        className="rounded-lg bg-trueGray-50 dark:bg-trueGray-800"
        height={864 * (1200 / 1800)}
        priority
        src={`/blog/${slug}/hero.png`}
        width={864}
      />
      <h2 className="text-2xl font-medium leading-tight mt-4 text-trueGray-900 dark:text-trueGray-100 duration-200 group-hover:text-emerald-500">
        {title}
      </h2>
      <div className="my-2 text-trueGray-700 dark:text-trueGray-300">
        {children}
      </div>
      <footer className="text-trueGray-600 text-sm">
        {dayjs(date).format('MMMM, YYYY')}
      </footer>
    </a>
  </Link>
)
