'use client'

import { sortBy } from 'lodash'
import Link from 'next/link'
import { type FunctionComponent } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  active?: string
  className?: string
  tags: Array<string>
}

export const TagsCard: FunctionComponent<Props> = ({
  active,
  className,
  tags,
}) => (
  <div className={twMerge('flex flex-wrap lg:flex-col -m-2', className)}>
    {sortBy(tags).map((tag) => (
      <TagCard active={active} key={tag} tag={tag} />
    ))}
  </div>
)

type TagProps = {
  active?: string
  tag: string
}

const TagCard: FunctionComponent<TagProps> = ({ active, tag }) => {
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
