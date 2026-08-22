/** biome-ignore-all lint/correctness/useImageSize: go away */
/** biome-ignore-all lint/suspicious/noUnknownAttribute: go away */
/** biome-ignore-all lint/performance/noImgElement: go away */

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
  id: Promise<keyof typeof dimensions>
  params: Promise<{
    slug: string
  }>
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
  const { slug } = await params

  const post = await fetchPost(slug)

  if (!post) {
    return new NextResponse('Post not found', {
      status: 404,
    })
  }

  const { height, width } = dimensions[await id]

  const date = parseISO(post.date as string)

  return new ImageResponse(
    <div tw="h-full w-full bg-blue-300 justify-between flex flex-col bg-white">
      <img
        alt={post.title}
        src={post.icon.url}
        tw="h-128 w-128 absolute top-8 right-8"
      />

      <div tw="flex flex-col absolute left-0 top-0 bottom-0 p-8 max-w-2/3">
        <img
          alt="Ali Zahid"
          src="https://alizahid.dev/images/ali-zahid.jpg"
          tw="h-32 w-32 rounded-full"
        />

        <div tw="text-6xl font-bold mt-auto text-pretty">{post.title}</div>

        <div tw="font-medium text-2xl mt-8 text-gray-600">
          {format(date, 'MMMM d, y')}
        </div>
      </div>
    </div>,
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
  new URL('/fonts/body-bold.ttf', 'https://alizahid.dev'),
).then((response) => response.arrayBuffer())

const fontMedium = fetch(
  new URL('/fonts/body-medium.ttf', 'https://alizahid.dev'),
).then((response) => response.arrayBuffer())
