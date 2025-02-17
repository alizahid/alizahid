import {
	Browser,
	DribbbleLogo,
	EnvelopeSimple,
	GithubLogo,
	LinkedinLogo,
	TwitterLogo,
} from '@phosphor-icons/react/dist/ssr'

import { Document } from '~/components/resume/document'
import { type Job, JobCard } from '~/components/resume/job'
import { Paper } from '~/components/resume/paper'
import { type Skill, SkillCard } from '~/components/resume/skill'

export const metadata = {
	title: 'ali-zahid-resume',
}

export default function Page() {
	return (
		<Document>
			<Paper className="gap-12 p-12">
				<header className="flex flex-col gap-2">
					<h1 className="font-bold text-4xl text-emerald-800">Ali Z.</h1>

					<h2 className="font-medium text-2xl text-emerald-900">
						Tech Lead &#215; Product Developer &#215; Full-stack Engineer
					</h2>

					<p className="text-neutral-600">
						I started my web journey at 8 years old. Since then I&#39;ve worked
						with startups, government organizations, Academy award winning
						filmmakers, and everything in between to build robust and scalable
						technology.
					</p>
				</header>

				<section className="flex flex-col gap-6">
					<h3 className="font-bold text-2xl text-emerald-900">Experience</h3>

					{experience
						.filter((job) => job.featured)
						.map((job) => (
							<JobCard job={job} key={job.company} />
						))}
				</section>
			</Paper>

			<Paper className="gap-12 p-12">
				<section className="flex flex-col gap-6">
					<h3 className="font-bold text-2xl text-emerald-900">Experience</h3>

					{experience
						.filter((job) => !job.featured)
						.map((job) => (
							<JobCard job={job} key={job.company} />
						))}
				</section>
			</Paper>

			<Paper className="gap-12 p-12">
				<section className="flex flex-col gap-6">
					<h3 className="font-bold text-2xl text-emerald-900">Skills</h3>

					<div className="grid grid-cols-2 gap-6">
						<div className="flex flex-col gap-6">
							{skills
								.filter((skill) => skill.side === 'left')
								.map((skill) => (
									<SkillCard key={skill.title} skill={skill} />
								))}
						</div>

						<div className="flex flex-col gap-6">
							{skills
								.filter((skill) => skill.side === 'right')
								.map((skill) => (
									<SkillCard key={skill.title} skill={skill} />
								))}
						</div>
					</div>
				</section>

				<section className="flex flex-col gap-6">
					<h3 className="font-bold text-2xl text-emerald-900">Contact</h3>

					<div className="grid grid-cols-3 gap-4">
						{contact.map((item) => (
							<a
								className="flex items-center gap-2"
								href={item.href}
								key={item.href}
							>
								{item.icon}

								{item.label}
							</a>
						))}
					</div>
				</section>
			</Paper>
		</Document>
	)
}

const experience: Array<Job> = [
	{
		company: 'Workcraft',
		description: 'Workcraft is an AI powered hiring assistant',
		featured: true,
		location: 'Dubai',
		positions: [
			{
				from: new Date(2023, 9),
				responsibilities: [
					'Designed and built their flagship app with Next.js, TypeScript, Prisma',
					'Major focus on speed, accessibility, and clean design',
					'Background workers with Upstash and Trigger.dev',
				],
				stack: ['Supabase', 'OpenAI', 'Radix UI', 'Tailwind CSS', 'Turborepo'],
				title: 'Tech lead',
				to: new Date(),
			},
		],
	},
	{
		company: 'NockNock',
		description: 'P2P marketplace for event spaces',
		featured: true,
		location: 'Remote',
		positions: [
			{
				from: new Date(2022, 5),
				responsibilities: [
					'Built their mobile app with Expo, TypeScript, tRPC',
					'All custom code and design (with help from their design team)',
				],
				stack: ['Next.js', 'React Native', 'PlanetScale', 'Tailwind CSS'],
				title: 'Tech lead',
				to: new Date(2023, 2),
			},
		],
	},
	{
		company: 'Blacklane',
		description: 'A premium car booking service',
		featured: true,
		location: 'Berlin',
		positions: [
			{
				from: new Date(2022, 0),
				responsibilities: [
					'Built the next generation of their web stack with a focus on performance and accessibility',
					'Hiring and development for my team of 6',
				],
				stack: [
					'Next.js',
					'Tailwind CSS',
					'Storybook',
					'GraphQL',
					'Turborepo',
					'TypeScript',
				],
				title: 'Tech lead',
				to: new Date(2022, 5),
			},
			{
				from: new Date(2021, 5),
				responsibilities: [
					'Worked on the booking funnel for their flagship app',
					'Maintaining and improving the internal design system that powers their web experience',
					'Built a mini frontend for integration with one of their largest partners',
				],
				stack: ['Next.js', 'GraphQL', 'Storybook', 'CSS', 'TypeScript'],
				title: 'Senior full-stack engineer',
				to: new Date(2022, 0),
			},
		],
	},
	{
		company: 'Wukla',
		description: 'DocuSign alternative for Pakistan and United Arab Emirates',
		location: 'Remote',
		positions: [
			{
				from: new Date(2020, 4),
				responsibilities: [
					'Built the next generation of their electronic document signing and payment collection platform',
					'Built SDKs that customers can integrate into their apps',
					'All custom code and design',
				],
				stack: [
					'Next.js',
					'Prisma',
					'Apollo',
					'GraphQL',
					'Stripe',
					'Tailwind CSS',
					'TypeScript',
				],
				title: 'Tech lead',
				to: new Date(2023, 9),
			},
		],
	},
	{
		company: 'AYM',
		description:
			'Built ops tech for Danube, one of the largest grocers in Saudi Arabia',
		location: 'Dubai',
		positions: [
			{
				from: new Date(2019, 4),
				responsibilities: [
					'Requirement gathering with stakeholders, sprint planning, and project management for the next generations of our products',
					'Managed hiring, training, retention, and did code reviews for my team of 9 people',
				],
				stack: [
					'Next.js',
					'Node.js',
					'Apollo',
					'GraphQL',
					'Prisma',
					'Tailwind CSS',
					'TypeScript',
				],
				title: 'Tech lead',
				to: new Date(2020, 0),
			},
			{
				from: new Date(2018, 0),
				responsibilities: [
					'Designed the architecture and built the backend for a loyalty program for a major consumer brand',
					'Scaled to over 5 million monthly active users in 8 markets with close to 0% failure rate',
					'Hired and managed a team of 4 remote and 2 on-site engineers',
				],
				stack: ['Node.js', 'Microsoft Azure', 'TypeScript'],
				title: 'Backend lead',
				to: new Date(2019, 4),
			},
			{
				from: new Date(2017, 5),
				responsibilities: [
					'Built operations and fulfillment tech for the largest chain of supermarkets in Saudi Arabia',
					'Increased operational capability and efficiency from 10 to 200 orders a day by building a suite of apps for warehouse workers, drivers, supervisors, and managers',
				],
				stack: ['React Native', 'Ruby on Rails', 'TypeScript'],
				title: 'Full-stack engineer',
				to: new Date(2018, 0),
			},
		],
	},
	{
		company: 'JadoPado',
		description: 'Amazon-like marketplace which got acquired by Noon in 2017',
		location: 'Dubai',
		positions: [
			{
				from: new Date(2016, 9),
				responsibilities: [
					'Localized our flagship React Native app into Arabic, including right-to-left layouts, animations, and iconography',
					'Designed the strategy and wrote code mods to prepare the existing codebase to support localization',
					'Contributed to the open-source React Native ecosystem with RTL improvements',
				],
				stack: ['React Native', 'TypeScript'],
				title: 'Full-stack engineer',
				to: new Date(2017, 1),
			},
		],
	},
]

const skills: Array<Skill> = [
	{
		className: 'bg-emerald-50 text-emerald-950',
		items: [
			'Full-stack engineering',
			'Architecture design',
			'Solutions design',
			'Product design',
			'User interface design',
			'Open-source',
			'Team management',
			'Leadership',
		],
		side: 'left',
		title: 'Core',
		type: 'items',
	},
	{
		className: 'bg-indigo-50 text-indigo-950',
		items: [
			'Expo',
			'React Native',
			'Reanimated',
			'Gesture Handler',
			'iOS',
			'Android',
		],
		side: 'left',
		title: 'Mobile',
		type: 'items',
	},
	{
		className: 'bg-indigo-50 text-indigo-950',
		items: [
			'Next.js',
			'React',
			'Solid.js',
			'Ember.js',
			'Tauri',
			'Radix UI',
			'Tailwind CSS',
			'SASS',
		],
		side: 'left',
		title: 'Frontend',
		type: 'items',
	},
	{
		className: 'bg-indigo-50 text-indigo-950',
		items: [
			'Node.js',
			'Apollo',
			'Fastify',
			'Express',
			'tPRC',
			'GraphQL',
			'REST',
			'microservices',
			'serverless',
		],
		side: 'left',
		title: 'Backend',
		type: 'items',
	},
	{
		className: 'bg-teal-50 text-teal-950',
		items: ['TypeScript', 'JavaScript', 'Ruby on Rails'],
		side: 'left',
		title: 'Languages',
		type: 'items',
	},
	{
		className: 'bg-amber-50 text-amber-950',
		items: ['OpenAI', 'GPT', 'Anthropic', 'Claude'],
		side: 'left',
		title: 'AI',
		type: 'items',
	},
	{
		className: 'bg-amber-50 text-amber-950',
		sections: [
			{
				items: ['PostgreSQL', 'FaunaDB', 'MongoDB', 'MySQL'],
				title: 'Databases',
			},
			{
				items: ['GraphQL', 'Prisma', 'tRPC'],
				title: 'Frameworks',
			},
			{
				items: [
					'Algolia',
					'Atlas',
					'Braze',
					'Expo',
					'Neon',
					'PlanetScale',
					'Segment',
					'Supabase',
				],
				title: 'Services',
			},
		],
		side: 'right',
		title: 'Data',
		type: 'sections',
	},
	{
		className: 'bg-rose-50 text-rose-950',
		sections: [
			{
				items: ['Vercel', 'Heroku', 'Render'],
				title: 'Platforms',
			},
			{
				items: ['S3', 'SQS', 'Lambda'],
				title: 'Amazon Web Services',
			},
			{
				items: ['Firebase', 'Firestore', 'Functions', 'Scheduler', 'SQL'],
				title: 'Google Cloud Platform',
			},
			{
				items: [
					'Azure DevOps',
					'API Gateway',
					'App Service',
					'Functions',
					'Cosmos DB',
					'Service Bus',
					'Application Insights',
				],
				title: 'Microsoft Azure',
			},
		],
		side: 'right',
		title: 'Services',
		type: 'sections',
	},
]

const contact = [
	{
		href: 'https://alizahid.dev',
		icon: <Browser className="size-5" />,
		label: 'alizahid.dev',
	},
	{
		href: 'mailto:ali.zahid@live.com',
		icon: <EnvelopeSimple className="size-5" />,
		label: 'ali.zahid@live.com',
	},
	{
		href: 'https://github.com/alizahid',
		icon: <GithubLogo className="size-5" />,
		label: 'alizahid',
	},
	{
		href: 'https://linkedin.com/in/alizahid',
		icon: <LinkedinLogo className="size-5" />,
		label: 'alizahid',
	},
	{
		href: 'https://twitter.com/alizah1d',
		icon: <TwitterLogo className="size-5" />,
		label: 'alizah1d',
	},
	{
		href: 'https://dribbble.com/alizahid',
		icon: <DribbbleLogo className="size-5" />,
		label: 'alizahid',
	},
]
