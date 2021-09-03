import clsx from 'clsx'
import sortBy from 'lodash/sortBy'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FunctionComponent } from 'react'

type Props = {
  className?: string
  tags: Array<string>
}

export const TagsCard: FunctionComponent<Props> = ({ className, tags }) => {
  const { query } = useRouter()

  return (
    <div className={clsx('flex flex-wrap lg:flex-col -m-2', className)}>
      {sortBy(tags).map((tag) => (
        <Link href={`?tag=${tag}`} key={tag} shallow>
          <a
            className={clsx(
              'leading-none rounded-lg p-2',
              query.tag === tag
                ? 'text-primary-600 dark:text-primary-400 font-medium'
                : 'text-black dark:text-white'
            )}>
            {tag}
          </a>
        </Link>
      ))}
    </div>
  )
}
