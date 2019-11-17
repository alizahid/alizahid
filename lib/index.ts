import { basename } from 'path'

export const imagePath = (slug: string, path: string) =>
  `/blog/${slug}/${basename(path)}`
