import {
	Browser,
	DribbbleLogo,
	EnvelopeSimple,
	GithubLogo,
	LinkedinLogo,
	TwitterLogo,
} from '@phosphor-icons/react/dist/ssr'
import { groupBy } from 'lodash'

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
						Passionate tech leader and full-stack engineer with a proven track
						record in AI-driven products, scalable architectures, and
						high-performance applications. Built technology for startups,
						governments, and Oscar-winning filmmakers, delivering impactful
						solutions across industries.
					</p>
				</header>

				<section className="flex flex-col gap-6">
					<h3 className="font-bold text-2xl text-emerald-900">Experience</h3>

					{experience
						.filter((job) => job.page === 0)
						.map((job) => (
							<JobCard job={job} key={job.company} />
						))}
				</section>
			</Paper>

			{Object.entries(groupBy(experience, 'page'))
				.filter(([page]) => page !== '0')
				.map(([page, jobs]) => (
					<Paper key={page} className="gap-12 p-12">
						<section className="flex flex-col gap-6">
							<h3 className="font-bold text-2xl text-emerald-900">
								Experience
							</h3>

							{jobs.map((job) => (
								<JobCard job={job} key={job.company} />
							))}
						</section>
					</Paper>
				))}

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

					<div className="grid grid-cols-3 gap-2">
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
		description:
			'AI-powered recruiting software that streamlines hiring with competency frameworks, AI-powered candidate ranking, interview scheduling, and feedback collection',
		location: 'Dubai',
		page: 0,
		positions: [
			{
				from: new Date(2023, 9),
				responsibilities: [
					'Architected and built the entire Workcraft platform from scratch, leveraging Next.js, React Server Components, and Prisma for a high-performance, scalable web app',
					'Designed and implemented AI-powered hiring workflows, integrating OpenAI and Anthropic via Vercel AI SDK to automate candidate ranking and competency-based evaluations',
					'Integrated full ATS functionality, including calendar sync and automated interview scheduling, using Nylas to create seamless booking experiences inside users’ calendars',
					'Optimized performance and scalability, implementing Upstash Redis caching and Trigger.dev background jobs to ensure real-time updates and fast response times',
				],
				stack: [
					'Next.js',
					'TypeScript',
					'Prisma',
					'Supabase',
					'OpenAI',
					'Radix UI',
					'Tailwind CSS',
					'Turborepo',
				],
				title: 'Tech Lead',
			},
		],
	},
	{
		company: 'NockNock',
		description:
			'Peer-to-peer space booking platform enabling users to rent unique spaces by the hour, such as rooftops for parties or home theaters for private screenings',
		page: 0,
		location: 'Remote',
		positions: [
			{
				from: new Date(2022, 5),
				to: new Date(2023, 2),
				title: 'Tech Lead',
				responsibilities: [
					'Designed and built the NockNock mobile app from scratch using React Native and Expo, enabling seamless space browsing, booking, and management',
					'Implemented a host management system, allowing hosts to accept/reject bookings and communicate with guests via in-app messaging',
					'Integrated real-time location and payments, leveraging MapBox for interactive maps and Stripe for secure transactions',
					'Optimized app performance and UI using Expo Router and Tailwind CSS, ensuring a fast, responsive, and visually engaging experience',
				],
				stack: [
					'TypeScript',
					'React Native',
					'Expo Router',
					'Tailwind CSS',
					'tRPC',
					'MapBox',
					'Firebase',
					'Stripe',
					'Stream',
				],
			},
		],
	},
	{
		company: 'Blacklane',
		description:
			'Premium chauffeur service providing high-end ride bookings with professional drivers in cities worldwide',
		page: 1,
		location: 'Berlin',
		positions: [
			{
				from: new Date(2022, 0),
				to: new Date(2022, 5),
				title: 'Tech Lead',
				responsibilities: [
					'Led a team of 6 engineers, conducting 1:1s, mentoring, and overseeing sprint planning to ensure efficient execution of technical projects',
					'Re-architected the frontend stack to improve accessibility (a11y) compliance and performance, enhancing usability for all users',
					'Migrated from CSS Modules to Tailwind CSS and refactored components with Radix UI, resulting in a more maintainable and scalable codebase',
				],
				stack: ['Next.js', 'GraphQL', 'Tailwind CSS', 'Radix UI'],
			},
			{
				from: new Date(2021, 5),
				to: new Date(2022, 0),
				title: 'Senior Full-Stack Engineer',
				responsibilities: [
					'Developed and shipped high-performance, accessible web features, improving UX across Blacklane’s platform',
					'Served as the sole frontend engineer for a client integration project, building a web app that enabled seamless ride booking via magic links without authentication',
					'Optimized GraphQL queries and frontend caching, significantly improving page load speeds and reducing unnecessary re-renders',
				],
				stack: ['Next.js', 'CSS Modules', 'GraphQL'],
			},
		],
	},
	{
		company: 'Wukla',
		page: 1,
		description:
			'Modern document signing platform tailored for the legal requirements of Pakistan and the UAE, offering a faster and more user-friendly alternative to DocuSign',
		location: 'Remote',
		positions: [
			{
				from: new Date(2020, 4),
				to: new Date(2023, 9),
				title: 'Tech Lead',
				responsibilities: [
					'Architected, designed, and developed Wukla from the ground up, building a high-performance document signing platform optimized for local legal requirements',
					'Built a custom document editor with xyflow, allowing users to drag and drop fields (signatures, dates, text boxes) onto documents for seamless signer input',
					'Implemented a scalable background job system using BullMQ and Redis to handle PDF generation, conversion, and processing with near real-time efficiency',
					'Developed a robust backend using Fastify, Apollo GraphQL, and PostgreSQL with Prisma, ensuring fast query execution and data consistency',
				],
				stack: [
					'Next.js',
					'TypeScript',
					'GraphQL',
					'Apollo',
					'Radix UI',
					'Fastify',
					'Prisma',
					'BullMQ',
				],
			},
		],
	},
	{
		company: 'AYM',
		page: 2,
		description:
			'E-commerce platform powering online grocery shopping and delivery for Danube, Saudi Arabia’s largest supermarket chain',
		location: 'Dubai',
		positions: [
			{
				from: new Date(2019, 4),
				to: new Date(2020, 0),
				title: 'Tech Lead',
				responsibilities: [
					'Led the engineering, design, and product teams for Danube’s e-commerce platform, ensuring seamless collaboration and high-quality software delivery',
					'Drove the migration from a monolithic Ruby on Rails architecture to a microservices-based system, improving scalability, maintainability, and performance',
					'Collaborated with stakeholders to translate business requirements into technical road maps and sprint plans, ensuring alignment between engineering and business goals',
					'Focused on team development, mentoring, and hiring, creating an environment that fostered growth, innovation, and high performance',
				],
				stack: ['Node.js', 'TypeScript', 'Microservices'],
			},
			{
				from: new Date(2018, 0),
				to: new Date(2019, 4),
				title: 'Backend Lead',
				responsibilities: [
					'Designed and built a highly scalable backend for the P&G Pampers Loyalty Program, replacing an unreliable system with a serverless architecture',
					'Developed a middleware platform that integrated with multiple APIs for authentication, coupon redemption, balance checking, rewards management, and analytics',
					'Served 5 million MAUs across 8+ markets with an uptime of 99.9%, using feature flags to maintain a single codebase with region-specific customizations',
					'Led a team of 6 engineers (4 remote, 2 onsite), managing sprint planning, mentoring, hiring, and team development to ensure efficient delivery of backend features',
				],
				stack: ['Node.js', 'TypeScript', 'Microsoft Azure'],
			},
			{
				from: new Date(2017, 5),
				to: new Date(2018, 0),
				title: 'Full-Stack Engineer',
				responsibilities: [
					'Developed four, multilingual React Native apps for warehouse operations; optimizing order fulfillment, packing, delivery processes, observability',
					'Built an optimized order picking system that provided the shortest route through the warehouse, increasing picker efficiency and reducing order processing time. Scaled capacity from 10 to 200 orders a day',
					'Implemented a driver app with fuel-efficient map routing and on-device credit card payments, reducing delivery costs and improving customer experience for cash-on-delivery orders',
					'Built the backend for the apps as part of the Ruby on Rails monolith. Learnt Rails on the job to ship all the features required to build the React Native apps',
				],
				stack: ['React Native', 'Ruby on Rails', 'TypeScript', 'PostgreSQL'],
			},
		],
	},
]

const skills: Array<Skill> = [
	{
		className: 'bg-emerald-50 text-emerald-950',
		items: [
			'Full-stack engineering',
			'AI integration',
			'Architecture & solutions design',
			'Performance optimization',
			'Team leadership & mentorship',
		],
		side: 'left',
		title: 'Core',
		type: 'items',
	},
	{
		className: 'bg-indigo-50 text-indigo-950',
		items: ['React', 'Next.js', 'React Native', 'Expo', 'Tailwind CSS'],
		side: 'left',
		title: 'Frontend',
		type: 'items',
	},
	{
		className: 'bg-indigo-50 text-indigo-950',
		items: ['Node.js', 'Apollo', 'Fastify', 'Ruby on Rails'],
		side: 'left',
		title: 'Backend',
		type: 'items',
	},
	{
		className: 'bg-teal-50 text-teal-950',
		items: ['TypeScript', 'JavaScript', 'Ruby'],
		side: 'left',
		title: 'Languages',
		type: 'items',
	},
	{
		className: 'bg-amber-50 text-amber-950',
		items: ['OpenAI GPT', 'Anthropic Claude', 'Vercel AI'],
		side: 'right',
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
		],
		side: 'right',
		title: 'Data',
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
