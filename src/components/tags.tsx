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
    <div className={twMerge('flex flex-wrap lg:flex-col -m-2', className)}>
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
        'leading-none rounded-lg p-2',
        isActive
          ? 'text-primary-600 dark:text-primary-400 font-medium'
          : 'text-black dark:text-white',
      )}
      href={isActive ? '/links' : `/links/${tag}`}
      key={tag}
      shallow
    >
      {tag}
    </Link>
  )
}
