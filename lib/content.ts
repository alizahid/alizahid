import axios from 'axios'
import moment from 'moment'
import Prismic from 'prismic-javascript'

import {
  Course,
  MediumPost,
  Post,
  PrismicChapter,
  PrismicLink,
  Project
} from '../types'

class Content {
  initPrismic() {
    return Prismic.getApi('https://alizahid.cdn.prismic.io/api/v2')
  }

  async posts(): Promise<Post[]> {
    const { data } = await axios.get<string>(
      'https://medium.com/@alizahid0?format=json'
    )

    const {
      payload: { references }
    } = JSON.parse(data.slice(data.indexOf('{')))

    const posts = Object.values(references.Post) as MediumPost[]

    return posts.map(post => ({
      date: moment(post.firstPublishedAt).toISOString(),
      excerpt: post.virtuals.subtitle,
      image: `https://miro.medium.com/fit/c/1800/900/${post.virtuals.previewImage.imageId}`,
      link: `https://medium.com/@alizahid0/${post.uniqueSlug}`,
      tags: post.virtuals.tags.map(({ name }) => name),
      title: post.title
    }))
  }

  async courses(): Promise<Course[]> {
    const prismic = await this.initPrismic()

    const { results } = await prismic.query(
      Prismic.Predicates.at('document.type', 'course'),
      {}
    )

    return results
      .map(({ data: { chapters, description, name, order } }) => ({
        chapters: chapters.map(({ details, title, video }: PrismicChapter) => ({
          details,
          title: title.pop()?.text,
          video: {
            image: video.thumbnail_url,
            link: video.embed_url
          }
        })),
        description,
        name: name.pop().text,
        order
      }))
      .sort((one, two) => (one.order > two.order ? 1 : -1))
  }

  async projects(): Promise<Project[]> {
    const prismic = await this.initPrismic()

    const { results } = await prismic.query(
      Prismic.Predicates.at('document.type', 'project'),
      {}
    )

    return results
      .map(({ data: { content, image, links, order, title } }) => ({
        content,
        image: image.url,
        links: links.map(({ label, link }: PrismicLink) => ({
          label,
          link: link.url
        })),
        order,
        title: title.pop().text
      }))
      .sort((one, two) => (one.order > two.order ? 1 : -1))
  }
}

export const content = new Content()
