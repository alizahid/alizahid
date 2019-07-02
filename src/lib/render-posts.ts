import { resolve } from 'path'

import { ensureFile, writeFile } from 'fs-extra'

import { Post, out } from '..'

import render from './render'

export default async (posts: Post[]) => {
  return Promise.all(
    posts.map(async post => {
      const html = render('article', {
        post
      })

      const { slug } = post

      const outPath = resolve(out, 'blog', slug, 'index.html')

      await ensureFile(outPath)

      return writeFile(outPath, html)
    })
  )
}
