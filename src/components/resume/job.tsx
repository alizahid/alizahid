import { format } from 'date-fns'
import { maxBy, minBy } from 'lodash'

import { Chip } from './chip'

export type Job = {
  company: string
  description: string
  featured?: boolean
  location: string
  positions: Array<{
    from: Date
    responsibilities: Array<string>
    title: string
    to?: Date
  }>
  stack: Array<string>
}

type Props = {
  job: Job
}

export function JobCard({ job }: Props) {
  const from = minBy(job.positions, 'from')?.from
  const to = maxBy(job.positions, 'to')?.to

  return (
    <article className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <h4 className="text-4 font-semibold">{job.company}</h4>

        <div className="flex items-center gap-1 text-2 tabular-nums text-sageA11">
          {from ? <span>{format(from, 'MMMM yyyy')}</span> : null}

          <span>&#8594;</span>

          <span>{to ? format(to, 'MMMM yyyy') : 'present'}</span>
        </div>

        <div className="text-2 text-sageA11">{job.location}</div>
      </div>

      <p className="-mt-2 text-2 text-sageA11">{job.description}</p>

      {job.positions.map((position) => (
        <div className="flex flex-col gap-1" key={position.title}>
          <div className="flex items-center gap-4">
            <h4 className="font-medium text-jadeA11">{position.title}</h4>

            {job.positions.length > 1 ? (
              <div className="flex items-center gap-1 text-2 tabular-nums text-sageA11">
                <span>{format(position.from, 'MMMM yyyy')}</span>

                <span>&#8594;</span>

                <span>
                  {position.to ? format(position.to, 'MMMM yyyy') : 'present'}
                </span>
              </div>
            ) : null}
          </div>

          <ul className="ml-4 flex list-disc flex-col gap-1 text-2">
            {position.responsibilities.map((responsibility) => (
              <li key={responsibility}>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}

      <div className="flex flex-wrap gap-2">
        {job.stack.map((item) => (
          <Chip className="bg-jadeA3" key={item}>
            {item}
          </Chip>
        ))}
      </div>
    </article>
  )
}
