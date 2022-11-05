import { sortBy } from 'lodash'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { type FunctionComponent, useMemo } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
  tags: Array<string>
}

export const TagsCard: FunctionComponent<Props> = ({ className, tags }) => (
  <div className={twMerge('flex flex-wrap lg:flex-col -m-2', className)}>
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
    <Link
      className={twMerge(
        'leading-none rounded-lg p-2',
        active
          ? 'text-primary-600 dark:text-primary-400 font-medium'
          : 'text-black dark:text-white'
      )}
      href={active ? '/links' : `/links/${tag}`}
      key={tag}
      shallow
    >
      {tag}
    </Link>
  )
}
