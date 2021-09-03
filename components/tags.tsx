import clsx from 'clsx'
import sortBy from 'lodash/sortBy'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FunctionComponent, useMemo } from 'react'

type Props = {
  className?: string
  tags: Array<string>
}

export const TagsCard: FunctionComponent<Props> = ({ className, tags }) => (
  <div className={clsx('flex flex-wrap lg:flex-col -m-2', className)}>
    {sortBy(tags).map((tag) => (
      <TagCard key={tag} tag={tag} />
    ))}
  </div>
)

type TagProps = {
  tag: string
}

const TagCard: FunctionComponent<TagProps> = ({ tag }) => {
  const { query } = useRouter()

  const active = useMemo(() => query.tag === tag, [query.tag, tag])

  return (
    <Link href={active ? '/links' : `/links/${tag}`} key={tag} shallow>
      <a
        className={clsx(
          'leading-none rounded-lg p-2',
          active
            ? 'text-primary-600 dark:text-primary-400 font-medium'
            : 'text-black dark:text-white'
        )}>
        {tag}
      </a>
    </Link>
  )
}
