import { format } from 'date-fns'
import { maxBy, minBy } from 'lodash'
import { Chip } from './chip'

export type Job = {
	company: string
	description: string
	page: number
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
					</ul>

					{position.stack.length > 0 ? (
						<div className="flex gap-2">
							{position.stack.map((item) => (
								<Chip className="bg-emerald-50 text-emerald-950" key={item}>
									{item}{' '}
									<span className="-m-1 absolute size-1 overflow-hidden">
										,
									</span>
								</Chip>
							))}
						</div>
					) : null}
				</div>
			))}
		</article>
	)
}
