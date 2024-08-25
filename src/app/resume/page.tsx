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
      <Paper className="gap-8 p-8">
        <header className="flex flex-col gap-2">
          <h1 className="text-8 font-bold text-jadeA11">Ali Zahid</h1>

          <h2 className="text-6 font-medium">
            Tech Lead &#215; Product Developer &#215; Full-stack Engineer
          </h2>

          <p className="text-sageA11">
            I started my web journey at 8 years old. Since then I&#39;ve worked
            with startups, government organizations, Academy award winning
            filmmakers, and everything in between to build robust and scalable
            technology.
          </p>
        </header>

        <section className="flex flex-col gap-6">
          <h3 className="text-6 font-bold">Experience</h3>

          {experience
            .filter((job) => job.featured)
            .map((job) => (
              <JobCard job={job} key={job.company} />
            ))}
        </section>
      </Paper>

      <Paper className="gap-8 p-8">
        <section className="flex flex-col gap-6">
          <h3 className="text-6 font-bold">Experience</h3>

          {experience
            .filter((job) => !job.featured)
            .map((job) => (
              <JobCard job={job} key={job.company} />
            ))}
        </section>
      </Paper>

      <Paper className="gap-8 p-8">
        <section className="flex flex-col gap-6">
          <h3 className="text-6 font-bold">Skills</h3>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-6">
              {skills
                .filter((skill, index) => index % 2 === 0)
                .map((skill) => (
                  <SkillCard key={skill.title} skill={skill} />
                ))}
            </div>

            <div className="flex flex-col gap-6">
              {skills
                .filter((skill, index) => index % 2 !== 0)
                .map((skill) => (
                  <SkillCard key={skill.title} skill={skill} />
                ))}
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <h3 className="text-6 font-bold">Contact</h3>

          <div className="grid grid-cols-3 gap-4">
            {contact.map((item) => (
              <a
                className="flex items-center gap-4"
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
    description: 'Workcraft is an AI based hiring assistant',
    featured: true,
    location: 'Dubai',
    positions: [
      {
        from: new Date(2023, 9),
        responsibilities: [
          'Building an AI based hiring assistant that helps you shave days off recruitment times',
        ],
        title: 'Co-founder',
      },
    ],
    stack: [
      'Next.js',
      'OpenAI',
      'PostgreSQL',
      'Prisma',
      'Radix',
      'React.js',
      'Supabase',
      'Tailwind CSS',
      'TypeScript',
    ],
  },
  {
    company: 'NockNock',
    description: 'P2P marketplace for event space',
    featured: true,
    location: 'Remote',
    positions: [
      {
        from: new Date(2022, 5),
        responsibilities: ['Architected and built the mobile app'],
        title: 'Tech lead',
        to: new Date(2023, 2),
      },
    ],
    stack: [
      'Expo',
      'Next.js',
      'PlanetScale',
      'React Native',
      'React.js',
      'Tailwind CSS',
      'tRPC',
      'TypeScript',
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
          'Building the next generation of their web stack with a focus on performance and accessbility',
          'Hiring and development for my team of 6',
        ],
        title: 'Tech lead',
        to: new Date(2022, 5),
      },
      {
        from: new Date(2021, 5),
        responsibilities: [
          'Working on the booking funnel for their web app',
          'Maintaining the internal design system that powers their web experience',
        ],
        title: 'Senior full-stack engineer',
        to: new Date(2022, 0),
      },
    ],
    stack: [
      'CSS',
      'GraphQL',
      'Next.js',
      'Node.js',
      'React.js',
      'Storybook',
      'Tailwind CSS',
      'Turborepo',
      'TypeScript',
    ],
  },
  {
    company: 'Wukla',
    description: 'DocuSign alternative',
    location: 'Remote',
    positions: [
      {
        from: new Date(2020, 4),
        responsibilities: [
          'Building the next generation of their electronic document signing and payment collection platform',
        ],
        title: 'Co-founder',
      },
    ],
    stack: [
      'Apollo',
      'GraphQL',
      'Next.js',
      'Node.js',
      'Prisma',
      'React.js',
      'Stripe',
      'Tailwind CSS',
      'TypeScript',
    ],
  },
  {
    company: 'AYM',
    description:
      'A subsidiary of Danube Online, one of the largest grocers in Saudi Arabia',
    location: 'Dubai',
    positions: [
      {
        from: new Date(2019, 4),
        responsibilities: [
          'Requirement gathering with stakeholders, sprint planning, and project management for the next generations of our products',
          'Managed hiring, training, retention, and did code reviews for my team of 9 people',
        ],
        title: 'Tech lead',
        to: new Date(2020, 0),
      },
      {
        from: new Date(2018, 0),
        responsibilities: [
          'Designed the architecture and built the backend for a loyalty program for a major consumer brand',
          'Scaled to over 5 million monthly active users in 8 markets with close to 0% error rate',
          'Hired and managed a team of 4 remote and 2 on-site developers',
        ],
        title: 'Backend lead',
        to: new Date(2019, 4),
      },
      {
        from: new Date(2017, 5),
        responsibilities: [
          'Built operations and fulfillment tech for the largest chain of supermarkets in Saudi Arabia',
          'Increased operational capability and efficiency 10,000% by building a suite of apps for warehouse workers, drivers, supervisors, and managers',
        ],
        title: 'Full-stack engineer',
        to: new Date(2018, 0),
      },
    ],
    stack: [
      'Apollo',
      'GraphQL',
      'Next.js',
      'Node.js',
      'PostgreSQL',
      'Prisma',
      'React Native',
      'React.js',
      'Ruby on Rails',
      'Tailwind CSS',
      'TypeScript',
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
          'Designed the strategy and wrote codemods to prepare the existing codebase to support localization',
          'Contributed to the open-source React Native ecosystem with RTL improvements',
        ],
        title: 'Full-stack engineer',
        to: new Date(2017, 1),
      },
    ],
    stack: ['Node.js', 'React Native', 'React', 'TypeScript'],
  },
]

const skills: Array<Skill> = [
  {
    className: 'bg-jadeA3',
    items: [
      'Full-stack development',
      'Architecture design',
      'Solutions design',
      'Product design',
      'User interface design',
      'Open-source',
      'Team management',
      'Leadership',
    ],
    title: 'Core',
    type: 'items',
  },
  {
    className: 'bg-indigoA3',
    items: [
      'React',
      'React Native',
      'Next.js',
      'Expo',
      'Solid.js',
      'Ember.js',
      'Tauri',
      'Radix',
      'Tailwind CSS',
      'SASS',
    ],
    title: 'Frontend',
    type: 'items',
  },
  {
    className: 'bg-indigoA3',
    items: [
      'Node.js',
      'tPRC',
      'Apollo',
      'Fastify',
      'Express',
      'REST',
      'GraphQL',
      'microservices',
      'serverless',
    ],
    title: 'Backend',
    type: 'items',
  },
  {
    className: 'bg-tealA3',
    items: ['TypeScript', 'JavaScript', 'Ruby on Rails'],
    title: 'Languages',
    type: 'items',
  },
  {
    className: 'bg-amberA3',
    sections: [
      {
        items: ['FaunaDB', 'MongoDB', 'MySQL', 'PostgreSQL'],
        title: 'Databases',
      },
      {
        items: ['GraphQL', 'Prisma'],
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
    title: 'Data',
    type: 'sections',
  },
  {
    className: 'bg-rubyA3',
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
    title: 'Services',
    type: 'sections',
  },
]

const contact = [
  {
    href: 'https://alizahid.dev',
    icon: <Browser className="text-sageA12" size={20} />,
    label: 'alizahid.dev',
  },
  {
    href: 'mailto:ali.zahid@live.com',
    icon: <EnvelopeSimple className="text-sageA12" size={20} />,
    label: 'ali.zahid@live.com',
  },
  {
    href: 'https://github.com/alizahid',
    icon: <GithubLogo className="text-sageA12" size={20} />,
    label: 'alizahid',
  },
  {
    href: 'https://linkedin.com/in/alizahid',
    icon: <LinkedinLogo className="text-sageA12" size={20} />,
    label: 'alizahid',
  },
  {
    href: 'https://x.com/alizah1d',
    icon: <TwitterLogo className="text-sageA12" size={20} />,
    label: 'alizah1d',
  },
  {
    href: 'https://dribbble.com/alizahid',
    icon: <DribbbleLogo className="text-sageA12" size={20} />,
    label: 'alizahid',
  },
]
