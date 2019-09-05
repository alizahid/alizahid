export interface Post {
  content: string
  excerpt: string
  published: string
  slug: string
  tags: string[]
  title: string
}

export interface Project {
  description: string
  links: {
    label: string
    link: string
  }[]
  name: string
}
