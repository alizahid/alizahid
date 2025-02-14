import { twMerge } from 'tailwind-merge'

import { Chip } from './chip'

export type Skill = {
	className?: string
	side?: 'left' | 'right'
	title: string
} & (
	| {
			sections: Array<{
				items: Array<string>
				title: string
			}>
			type: 'sections'
	  }
	| {
			items: Array<string>
			type: 'items'
	  }
)

type Props = {
	skill: Skill
}

export function SkillCard({ skill }: Props) {
	return (
		<article className="flex flex-col gap-2">
			<h4 className="font-semibold text-lg">{skill.title}</h4>

			<div
				className={twMerge(
					'flex',
					skill.type === 'sections' ? 'flex-col gap-4' : 'flex-wrap gap-2',
				)}
			>
				{skill.type === 'items'
					? skill.items.map((item) => (
							<Chip className={skill.className} key={item}>
								{item}
							</Chip>
						))
					: skill.sections.map((section) => (
							<div className="flex flex-col gap-2" key={section.title}>
								<h5 className="font-medium text-emerald-900 text-sm">
									{section.title}
								</h5>

								<div className="flex flex-wrap gap-2">
									{section.items.map((item) => (
										<Chip className={skill.className} key={item}>
											{item}
										</Chip>
									))}
								</div>
							</div>
						))}
			</div>
		</article>
	)
}
