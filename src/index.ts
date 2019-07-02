import { resolve } from 'path'

export const root = resolve(__dirname, '..', 'posts')
export const out = resolve(__dirname, '..', 'build')

export interface Post {
  body: string
  meta: {
    excerpt: string
    published: string
    tags: string[]
    title: string
  }
  slug: string
}

import {
  compileStylesheets,
  copyAssets,
  fetchPosts,
  renderHome,
  renderPosts
} from './lib'

const run = async () => {
  console.log('Fetching posts')

  const posts = await fetchPosts()

  console.log('Rendering home page')

  await renderHome(posts)

  console.log('Rendering posts')

  await renderPosts(posts)

  console.log('Compiling stylesheets')

  await compileStylesheets()

  console.log('Preparing assets')

  await copyAssets(posts)

  console.log('Done!')
}

run()
