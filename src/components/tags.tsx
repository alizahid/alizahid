'use client'

import { sortBy } from 'lodash'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

type Props = {
  active?: string
  className?: string
  tags: Array<string>
}

export function TagsCard({ active, className, tags }: Props) {
  return (
    <div className={twMerge('flex flex-wrap lg:flex-col gap-4', className)}>
      {sortBy(tags).map((tag) => (
        <TagCard active={active} key={tag} tag={tag} />
      ))}
    </div>
  )
}

type TagProps = {
  active?: string
  tag: string
}

function TagCard({ active, tag }: TagProps) {
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
}
