import Prismic from 'prismic-javascript'
import { Link, RichText } from 'prismic-reactjs'
import moment from 'moment'

const { REACT_APP_API_URI } = process.env

export default class API {
  static async init() {
    this.api = await Prismic.api(REACT_APP_API_URI)
  }

  static async getProjects() {
    const { results } = await this.api.query(
      Prismic.Predicates.at('document.type', 'project')
    )

    return results.map(this.normalizeProject)
  }

  static async getPosts(page = 1) {
    const { results, total_pages } = await this.api.query(
      Prismic.Predicates.at('document.type', 'post'),
      {
        page
      }
    )

    return {
      meta: {
        next: total_pages > page && page + 1,
        total: total_pages
      },
      posts: results.map(this.normalizePost)
    }
  }

  static async getPost(slug) {
    const post = await this.api.getByUID('post', slug)

    return this.normalizePost(post)
  }

  static async getPages() {
    const { results } = await this.api.query(
      Prismic.Predicates.at('document.type', 'page')
    )

    return results.map(this.normalizePage)
  }

  static async getMeta() {
    const { results } = await this.api.query(
      Prismic.Predicates.at('document.type', 'meta')
    )

    const {
      data: {
        about,
        dribbble,
        email,
        github,
        subtitle,
        title,
        twitter,
        image: { url }
      }
    } = results.pop()

    return {
      about,
      email: Link.url(email),
      image: url,
      subtitle: RichText.asText(subtitle),
      title: RichText.asText(title),
      social: {
        dribbble: Link.url(dribbble),
        github: Link.url(github),
        twitter: Link.url(twitter)
      }
    }
  }

  static normalizeProject(project) {
    const {
      first_publication_date,
      id,
      last_publication_date,
      uid,
      data: { background, color, content, initials, links, title }
    } = project

    return {
      background,
      color,
      content,
      initials,
      id,
      date: moment(first_publication_date),
      links: links.map(({ link }) => Link.url(link)),
      slug: uid,
      title: RichText.asText(title),
      updated: moment(last_publication_date)
    }
  }

  static normalizePost(post) {
    const {
      first_publication_date,
      id,
      last_publication_date,
      tags,
      uid,
      data: {
        content,
        excerpt,
        featured,
        title,
        image: { url }
      }
    } = post

    return {
      content,
      id,
      tags,
      date: moment(first_publication_date),
      excerpt: RichText.asText(excerpt),
      featured: featured === 'Yes',
      image: url,
      slug: uid,
      title: RichText.asText(title),
      updated: moment(last_publication_date)
    }
  }

  static normalizePage(page) {
    const {
      id,
      uid,
      data: { content, title }
    } = page

    return {
      content,
      id,
      slug: uid,
      title: RichText.asText(title)
    }
  }
}
