import Image from 'next/image'
import Link from 'next/link'

import { type Links } from '~/queries/links'

type Props = {
  link: Links[number]
}

export function LinkCard({ link }: Props) {
  return (
    <Link
      className="flex items-start gap-4"
      href={link.url}
      rel="noopener"
      target="_blank"
    >
      <figure className="relative h-9 w-9">
        <Image
          alt={link.title}
          className="rounded-4 bg-cover bg-center"
          fill
          src={link.image}
          unoptimized
        />
      </figure>

      <div className="flex flex-1 flex-col">
        <div className="text-4 font-medium">{link.title}</div>

        <div className="text-pretty text-sageA12">{link.description}</div>
      </div>
    </Link>
  )
}
