/* eslint-disable @next/next/no-img-element, react/no-unknown-property -- go away */

import { format, parseISO } from 'date-fns'
import { ImageResponse } from 'next/og'
import { NextResponse } from 'next/server'

import { fetchPost } from '~/queries/post'

export const dimensions = {
  facebook: {
    height: 630,
    width: 1200,
  },
  twitter: {
    height: 600,
    width: 1200,
  },
} as const

type Props = {
  id: keyof typeof dimensions
  params: {
    slug: string
  }
}

export const facebook = {
  contentType: 'image/png',
  id: 'facebook',
  size: dimensions.facebook,
}

export function generateImageMetadata() {
  return [facebook]
}

export default async function Image({ id, params }: Props) {
  const post = await fetchPost(params.slug)

  if (!post) {
    return new NextResponse('Post not found', {
      status: 404,
    })
  }

  const { height, width } = dimensions[id]

  const date = parseISO(post.date as string)

  return new ImageResponse(
    (
      <div tw="h-full w-full justify-between flex flex-col p-8 bg-white">
        <img alt={post.title} src={post.image.url} tw="h-full ml-auto" />

        <div tw="flex flex-col absolute left-8 bottom-8">
          <div tw="text-6xl font-bold">{post.title}</div>

          <div tw="font-medium text-2xl mt-4 text-gray-600">
            {format(date, 'MMMM d, y')}
          </div>
        </div>
      </div>
    ),
    {
      fonts: [
        {
          data: await fontBold,
          name: 'font',
          weight: 700,
        },
        {
          data: await fontMedium,
          name: 'font',
          weight: 500,
        },
      ],
      height,
      width,
    },
  )
}

const fontBold = fetch(
  new URL('/fonts/basis-sans-bold.ttf', 'https://alizahid.dev'),
).then((response) => response.arrayBuffer())

const fontMedium = fetch(
  new URL('/fonts/basis-sans-medium.ttf', 'https://alizahid.dev'),
).then((response) => response.arrayBuffer())