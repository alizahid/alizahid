import Prismic from 'prismic-javascript'
import { Link, RichText } from 'prismic-reactjs'

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
      id,
      uid,
      data: { background, color, content, initials, links, title }
    } = project

    return {
      background,
      color,
      content,
      initials,
      id,
      links: links.map(({ link }) => Link.url(link)),
      slug: uid,
      title: RichText.asText(title)
    }
  }
}
