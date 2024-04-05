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
    title: `${post.title} × Blog × Ali Zahid`,
  }
}

export default async function Page({ params }: Props) {
  const post = await fetchPost(params.slug)

  if (!post) {
    notFound()
  }

  const date = parseISO(post.date)

  return (
    <main>
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">{post.title}</h1>

        <Image
          alt={post.title}
          className="-mx-6 max-w-[100vw] bg-gray-3 lg:mx-0 lg:max-w-full lg:rounded-lg"
          height={1200}
          src={post.image.url}
          unoptimized
          width={1800}
        />

        <div className="text-xl font-medium">{post.excerpt}</div>

        <div className="text-sm text-gray-11">
          {format(date, isSameYear(date, new Date()) ? 'MMMM d' : 'MMMM d, y')}
        </div>
      </div>

      <Prose className="mt-12">
        <Markdown>{post.content}</Markdown>
      </Prose>
    </main>
  )
}
