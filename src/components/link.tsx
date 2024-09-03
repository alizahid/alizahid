import Image from 'next/image'
import Link from 'next/link'

import { type Links } from '~/queries/links'

type Props = {
  link: Links[number]
}

export function LinkCard({ link }: Props) {
  return (
    <Link
      className="flex items-start gap-4 overflow-hidden rounded-5 bg-accent-a3 p-5 hover:bg-accent-a4"
      href={link.url}
      rel="noopener"
      target="_blank"
    >
      <Image
        alt={link.title}
        className="rounded-4 bg-cover bg-center"
        height={48}
        objectFit="cover"
        src={link.image}
        unoptimized
        width={48}
      />

      <div className="flex flex-1 flex-col">
        <div className="text-4 font-medium">{link.title}</div>

        <div className="text-pretty text-gray-a12">{link.description}</div>
      </div>
    </Link>
  )
}
