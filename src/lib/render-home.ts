import { resolve } from 'path'

import { ensureFile, writeFile } from 'fs-extra'

import { Post, out } from '..'

import render from './render'

export default async (posts: Post[]) => {
  const html = render('home', {
    posts
  })

  const outPath = resolve(out, 'index.html')

  await ensureFile(outPath)

  return writeFile(outPath, html)
}
