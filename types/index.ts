export type ProjectMeta = {
  name: string
  slug: string
  side: 'left' | 'right'
  order: number
}

export type PostMeta = {
  title: string
  slug: string
  date: string
  excerpt: string
}
