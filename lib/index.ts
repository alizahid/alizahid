import { basename } from 'path'

export const imagePath = (slug: string, path: string) =>
  `/static/blog/${slug}/${basename(path)}`
