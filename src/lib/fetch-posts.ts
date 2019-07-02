import { basename, dirname, resolve } from 'path'

import globby from 'globby'
import { readFile, readJson } from 'fs-extra'
import { orderBy } from 'lodash'

import { root } from '..'

export default async () => {
  const data = await globby(`${root}/**/content.md`)

  const posts = await Promise.all(
    data.map(async file => {
      const slug = basename(dirname(file))
      const path = resolve(root, slug)

      const body = await readFile(`${path}/content.md`, 'utf8')
      const meta = await readJson(`${path}/meta.json`)

      return {
        body,
        meta,
        slug
      }
    })
  )

  return orderBy(posts.filter(Boolean), 'meta.published', 'desc')
}
