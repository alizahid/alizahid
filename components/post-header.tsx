import dayjs from 'dayjs'
import Head from 'next/head'
import Image from 'next/image'
import React, { FunctionComponent } from 'react'

interface Props {
  date: string
  slug: string
  title: string
}

export const PostHeader: FunctionComponent<Props> = ({ date, slug, title }) => (
  <>
    <Head>
      <meta content={title} property="og:title" />
      <meta content={`https://alizahid.dev/blog/${slug}`} property="og:url" />
      <meta
        content={`https://alizahid.dev/blog/${slug}/hero.png`}
        property="og:image"
      />
    </Head>

    <header className="mb-8">
      <Image
        alt={title}
        className="rounded-lg bg-trueGray-50 dark:bg-trueGray-800"
        height={864 * (1200 / 1800)}
        priority
        src={`/blog/${slug}/hero.png`}
        width={864}
      />
      <h2 className="text-5xl font-semibold leading-tight mt-8">{title}</h2>
      <div className="text-trueGray-600 dark:text-trueGray-300 mt-2">
        {dayjs(date).format('MMMM, YYYY')}
      </div>
    </header>
  </>
)
