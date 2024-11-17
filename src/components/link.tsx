import Image from 'next/image'
import Link from 'next/link'

import { type Links } from '~/queries/links'

import { Markdown } from './markdown'

type Props = {
  link: Links[number]
}

export function LinkCard({ link }: Props) {
  return (
    <Link
      className="flex items-start gap-4 outline-none ring-accent-a7 ring-offset-8 focus-visible:rounded-2 focus-visible:ring"
      href={link.url}
      rel="noopener"
      target="_blank"
    >
      <Image
        alt={link.title}
        height={48}
        src={link.image}
        unoptimized
        width={48}
      />

      <div className="flex flex-1 flex-col gap-4">
        <div className="text-4 font-bold">{link.title}</div>

        <Markdown
          className="space-y-4 text-pretty text-gray-a12"
          content={link.description}
        />
      </div>
    </Link>
  )
}
