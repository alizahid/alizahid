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
      className="flex items-start gap-4 outline-none focus-visible:bg-neutral-200"
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

      <div className="flex flex-1 flex-col items-start gap-2">
        <div className="bg-amber-200 font-bold text-xl leading-tight">
          {link.title}
        </div>

        <Markdown className="space-y-2" content={link.description} />
      </div>
    </Link>
  )
}
