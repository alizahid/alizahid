export interface Post {
  date: string
  excerpt: string
  image: string
  link: string
  tags: string[]
  title: string
}

export interface Course {
  chapters: CourseChapter[]
  description: string
  name: string
}

interface CourseChapter {
  details: string
  title: string
  video: CourseChapterVideo
}

interface CourseChapterVideo {
  image: string
  link: string
}

export interface Project {
  content: string
  image: string
  links: ProjectLink[]
  order: number
  title: string
}

export interface MediumPost {
  firstPublishedAt: number
  title: string
  uniqueSlug: string
  virtuals: {
    previewImage: {
      imageId: string
    }
    subtitle: string
    tags: {
      name: string
    }[]
  }
}

interface ProjectLink {
  label: string
  link: string
}

export interface PrismicChapter {
  details: {
    text: string
  }[]
  title: {
    text: string
  }[]
  video: PrismicVideo
}

export interface PrismicLink {
  label: string
  link: {
    url: string
  }
}

export interface PrismicVideo {
  embed_url: string
  thumbnail_url: string
}
