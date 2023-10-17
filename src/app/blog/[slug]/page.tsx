import { format, isSameYear, parseISO } from 'date-fns'
import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import { Markdown } from '~/components/markdown'
import { Prose } from '~/components/prose'
import { fetchPost } from '~/queries/post'
import { fetchSlugs } from '~/queries/posts'

export async function generateStaticParams() {
  const posts = await fetchSlugs()

  return posts.map(({ slug }) => ({
    slug,
  }))
}

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await fetchPost(params.slug)

  if (!post) {
    notFound()
  }

  return {
    description: post.excerpt,
    metadataBase: new URL('https://alizahid.dev'),
    openGraph: {
      images: post.image,
      type: 'article',
      url: `/blog/${post.slug}`,
    },
    title: `${post.title} × Blog × Ali Zahid`,
  }
}

export default async function Page({ params }: Props) {
  const post = await fetchPost(params.slug)

  const date = parseISO(post.date)

  return (
    <main>
      <Image
        alt={post.title}
        className="rounded-lg bg-gray-3"
        height={1200}
        src={post.image.url}
        unoptimized
        width={1800}
      />

      <div className="flex flex-col gap-4 mt-8">
        <h1 className="text-2xl font-black lg:text-4xl">{post.title}</h1>

        <div className="text-gray-11">{post.excerpt}</div>

        <div className="text-sm">
          {format(date, isSameYear(date, new Date()) ? 'MMMM d' : 'MMMM d, y')}
        </div>
      </div>

      <Prose className="mt-12">
        <Markdown>{post.content}</Markdown>
      </Prose>
    </main>
  )
}
