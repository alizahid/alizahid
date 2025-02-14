import { format } from 'date-fns'
import { maxBy, minBy } from 'lodash'

export type Job = {
	company: string
	description: string
	featured?: boolean
	location: string
	positions: Array<{
		from: Date
		responsibilities: Array<string>
		stack: Array<string>
		title: string
		to?: Date
	}>
}

type Props = {
	job: Job
}

export function JobCard({ job }: Props) {
	const from = minBy(job.positions, 'from')?.from
	const to = maxBy(job.positions, 'to')?.to

	return (
		<article className="flex flex-col gap-4">
			<div className="flex flex-col gap-2">
				<div className="flex items-center gap-2">
					<h4 className="font-semibold text-lg">{job.company}</h4>

					<div className="flex items-center gap-1 text-neutral-800 text-sm tabular-nums">
						{from ? <span>{format(from, 'MMM yyyy')}</span> : null}

						<span>&#8594;</span>

						<span>{to ? format(to, 'MMM yyyy') : 'present'}</span>
					</div>

					<div className="font-medium text-sm">{job.location}</div>
				</div>

				<p className="-mt-2 text-neutral-800 text-sm">{job.description}</p>
			</div>

			{job.positions.map((position) => (
				<div className="flex flex-col gap-2" key={position.title}>
					<div className="flex items-center gap-2">
						<h4 className="font-medium text-emerald-800">{position.title}</h4>

						{job.positions.length > 1 ? (
							<div className="flex items-center gap-1 text-neutral-800 text-sm tabular-nums">
								<span>{format(position.from, 'MMM yyyy')}</span>

								<span>&#8594;</span>

								<span>
									{position.to ? format(position.to, 'MMM yyyy') : 'present'}
								</span>
							</div>
						) : null}
					</div>

					<ul className="ml-4 flex list-disc flex-col gap-1 text-sm">
						{position.responsibilities.map((responsibility) => (
							<li key={responsibility}>{responsibility}</li>
						))}

						{position.stack.length > 0 ? (
							<li>Built using {position.stack.join(', ')}</li>
						) : null}
					</ul>
				</div>
			))}
		</article>
	)
}
