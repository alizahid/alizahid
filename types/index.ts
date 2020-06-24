export type Post = {
  body: string
  date: string
  excerpt: string
  slug: string
  tags: string[]
  title: string
}

export type PostAttributes = {
  slug: string
  title: string
  excerpt: string
  tags: string
  date: string
}

export type Project = {
  body: string
  links: ProjectLink[]
  order: number
  slug: string
  title: string
}

export type ProjectLink = {
  label: string
  link: string
}

export type ProjectAttributes = {
  link_app_store: string
  link_demo: string
  link_github: string
  link_google_play: string
  link_web: string
  order: number
  slug: string
  title: string
}
