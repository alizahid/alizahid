import { NextPage } from 'next'
import React from 'react'

import { Code, Link, Page, PostHeader } from '../../components'
import blog from '../../data/blog.json'
import { Post } from '../../types'

const post = blog.find(({ slug }) => slug === 'eslint-for-new-projects') as Post

const Blog: NextPage = () => (
  <Page description={post.excerpt} subtitle={post.title} title="Blog">
    <PostHeader date={post.date} slug={post.slug} title={post.title} />

    <div className="post">
      <p>
        I start new projects often and I&#39;m obsessive about doing them the
        right way. ESLint, Prettier, the works. Every project, even if it&#39;s
        a single page Next.js site, needs to have all the bells and whistles so
        things are perfectly consistent across all my code ever written.
      </p>
      <p>
        This collection is still a work in progress while I tinker with things,
        but I want to create a central repository so I can easily access
        everything.
      </p>
      <p>Let&#39;s get started.</p>

      <h3>Prettier</h3>
      <p>
        I love{' '}
        <Link external href="https://prettier.io">
          Prettier
        </Link>
        . It&#39;s opinionated and gives me a fantastic base to get started. I
        use a <code>precommit</code> hook alongside Prettier to make sure
        anything missed gets formatted.
      </p>
      <h4>Dependencies</h4>
      <Code
        className="my-4"
        code="yarn add --dev prettier husky pretty-quick"
        language="bash"
      />
      <h4>
        Precommit hook &#8212; <code>package.json</code>
      </h4>
      <Code
        className="my-4"
        code={`{
  "husky": {
    "hooks": {
      "pre-commit": "pretty-quick --staged"
    }
  }
}`}
        language="json"
      />
      <h4>
        Config &#8212; <code>prettier.config.js</code>
      </h4>
      <Code
        className="my-4"
        code={`module.exports = {
  bracketSpacing: true,
  jsxBracketSameLine: true,
  semi: false,
  singleQuote: true,
  trailingComma: 'none'
}`}
        language="javascript"
      />

      <h3>ESLint</h3>
      <p>
        I rely on a lot of ESLint plugins to help lint my code. I&#39;m
        obsessive about standards and consistency. Other than Prettier and
        standard ESLint / TypeScript rules, here are the things I need.
      </p>
      <ul>
        <li>Imports should be grouped and sorted</li>
        <li>
          Object (including destructured) keys should be sorted alphabetically
        </li>
        <li>Component props should be sorted alphabetically</li>
      </ul>
      <p>
        By using these rules, I can be certain that code across repos will be
        consistent. But different types of projects require different rules and
        configurations. Let&#39;s break it down.
      </p>

      <h3>Node.js</h3>
      <h4>Dependencies</h4>
      <Code
        className="my-4"
        code="yarn add --dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-simple-import-sort eslint-plugin-sort-destructure-keys eslint-plugin-sort-keys-fix"
        language="bash"
      />
      <h4>
        Script &#8212; <code>package.json</code>
      </h4>
      <Code className="my-4" code="eslint . --ext js,ts" language="bash" />
      <h4>
        Configuration &#8212; <code>.eslintrc.json</code>
      </h4>
      <Code
        className="my-4"
        code={`{
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint"
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint",
    "sort-keys-fix",
    "sort-destructure-keys",
    "simple-import-sort",
    "prettier"
  ],
  "rules": {
    "prettier/prettier": "error",
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error",
    "sort-destructure-keys/sort-destructure-keys": "error",
    "sort-keys-fix/sort-keys-fix": "error"
  }
}`}
        language="json"
      />

      <h3>Next.js</h3>
      <h4>Dependencies</h4>
      <Code
        className="my-4"
        code="yarn add --dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-simple-import-sort eslint-plugin-sort-destructure-keys eslint-plugin-sort-keys-fix"
        language="bash"
      />
      <h4>
        Script &#8212; <code>package.json</code>
      </h4>
      <Code className="my-4" code="eslint . --ext js,ts,tsx" language="bash" />
      <h4>
        Configuration &#8212; <code>.eslintrc.json</code>
      </h4>
      <Code
        className="my-4"
        code={`{
  "env": {
    "browser": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint"
  ],
  "overrides": [
    {
      "files": ["*.js"],
      "rules": {
        "@typescript-eslint/no-var-requires": "off"
      }
    }
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint",
    "react-hooks",
    "sort-keys-fix",
    "sort-destructure-keys",
    "simple-import-sort",
    "prettier"
  ],
  "rules": {
    "@typescript-eslint/explicit-function-return-type": "off",
    "prettier/prettier": "error",
    "react-hooks/exhaustive-deps": "error",
    "react-hooks/rules-of-hooks": "error",
    "react/jsx-sort-props": "error",
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error",
    "sort-destructure-keys/sort-destructure-keys": "error",
    "sort-keys-fix/sort-keys-fix": "error"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}`}
        language="json"
      />

      <h3>React Native</h3>
      <h4>Dependencies</h4>
      <Code
        className="my-4"
        code="yarn add --dev @react-native-community/eslint-config @react-native-community/eslint-plugin @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-native eslint-plugin-simple-import-sort eslint-plugin-sort-destructure-keys eslint-plugin-sort-keys-fix"
        language="bash"
      />
      <h4>
        Script &#8212; <code>package.json</code>
      </h4>
      <Code className="my-4" code="eslint . --ext js,ts,tsx" language="bash" />
      <h4>
        Configuration &#8212; <code>.eslintrc.json</code>
      </h4>
      <Code
        className="my-4"
        code={`{
  "extends": [
    "@react-native-community",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint"
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint",
    "react-hooks",
    "react-native",
    "react",
    "simple-import-sort",
    "sort-destructure-keys",
    "sort-keys-fix",
    "prettier"
  ],
  "rules": {
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "@typescript-eslint/no-use-before-define": [
      "error",
      {
        "variables": false
      }
    ],
    "prettier/prettier": "error",
    "react-hooks/exhaustive-deps": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-native/no-inline-styles": "error",
    "react-native/no-raw-text": "error",
    "react-native/no-unused-styles": "error",
    "react-native/split-platform-components": "error",
    "react/jsx-sort-props": "error",
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error",
    "sort-destructure-keys/sort-destructure-keys": "error",
    "sort-keys-fix/sort-keys-fix": "error"
  }
}`}
        language="json"
      />

      <hr />

      <p>
        I&#39;ll keep updating this as I discover more useful stuff or remove
        redundant or incorrect stuff. If you have any suggestions,{' '}
        <Link href="https://twitter.com/alizahid0">hit me up</Link> on Twitter.
      </p>
    </div>
  </Page>
)

export default Blog
