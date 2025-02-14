import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
	overwrite: true,
	schema: process.env.HYGRAPH_URL,
	documents: 'src/**/*.{ts,tsx}',
	generates: {
		'src/types/hygraph.ts': {
			config: {
				avoidOptionals: true,
				inputMaybeValue: 'T | undefined',
				maybeValue: 'T',
			},
			plugins: ['typescript', 'typescript-operations'],
		},
	},
}

export default config
