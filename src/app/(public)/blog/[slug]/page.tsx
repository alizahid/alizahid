import { format, isSameYear, parseISO } from 'date-fns'
import { type Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import { Markdown } from '~/components/markdown'
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
    title: `${post.title} × Blog × Ali Zahid`,
  }
}

export default async function Page({ params }: Props) {
  const post = await fetchPost(params.slug)

  if (!post) {
    notFound()
  }

  const date = parseISO(post.date as string)

  return (
    <main>
      <div className="flex flex-col gap-4">
        <h1 className="text-9 font-bold">{post.title}</h1>

        <div className="text-4 font-medium">{post.excerpt}</div>

        <div className="text-2 text-gray-a11">
          {format(date, isSameYear(date, new Date()) ? 'MMMM d' : 'MMMM d, y')}
        </div>

        <Image
          alt={post.title}
          className="rounded-6 bg-gray-a3"
          height={1200}
          src={post.image.url}
          unoptimized
          width={1800}
        />
      </div>

      <Markdown className="mt-9" content={post.content} />
    </main>
  )
}
