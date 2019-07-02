#!/usr/bin/env node

import { resolve } from 'path'

import { get, kebabCase } from 'lodash'
import { ensureFile, pathExists, writeJson } from 'fs-extra'

const createPost = async () => {
  const path = resolve(__dirname, '..', 'posts')

  const title = get(process.argv, 2)

  const slug = kebabCase(title)

  const newPath = resolve(path, slug)

  const exists = await pathExists(newPath)

  if (exists) {
    console.log(`"${slug}" already exists`)

    process.exit()
  }

  await ensureFile(resolve(newPath, 'content.md'))

  await writeJson(
    resolve(newPath, 'meta.json'),
    {
      title,
      excerpt: '',
      featured: false,
      published: new Date().toISOString(),
      tags: []
    },
    {
      spaces: 2
    }
  )

  console.log(`"${title}" created at "${slug}"`)
}

createPost()
