import { type CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
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
  overwrite: true,
  schema: process.env.HYGRAPH_URL,
}

export default config
