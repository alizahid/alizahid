'use client'

import { sortBy } from 'lodash'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

type Props = {
  active?: string
  className?: string
  tags: Array<string>
}

export function Tags({ active, className, tags }: Props) {
  return (
    <div className={twMerge('flex flex-wrap lg:flex-col gap-4', className)}>
      {sortBy(tags).map((tag) => {
        const isActive = active === tag

        return (
          <Link
            className={twMerge(
              'leading-none',
              isActive ? 'text-grass-11 font-medium' : 'text-gray-11',
            )}
            href={isActive ? '/links' : `/links/${tag}`}
            key={tag}
            shallow
          >
            {tag}
          </Link>
        )
      })}
    </div>
  )
}
