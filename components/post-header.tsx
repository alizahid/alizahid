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
      <figure className="relative w-full pb-hero rounded-lg shadow-sm">
        <Image
          className="rounded-lg"
          layout="fill"
          priority
          src={`/blog/${slug}/hero.png`}
        />
      </figure>
      <h2 className="text-5xl font-medium leading-tight mt-8">{title}</h2>
      <div className="text-gray-600 mt-2">
        {dayjs(date).format('MMMM, YYYY')}
      </div>
    </header>
  </>
)
