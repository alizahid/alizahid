import { basename } from 'path'

export default (slug: string, path: string) => `/img/${slug}/${basename(path)}`
