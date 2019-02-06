import Prismic from 'prismic-javascript'
import { Link, RichText } from 'prismic-reactjs'
import moment from 'moment'

const { REACT_APP_API_URI } = process.env

export default class API {
  static async init() {
    this.api = await Prismic.api(REACT_APP_API_URI)
  }

  static async getGoals() {
    const { results } = await this.api.query(
      Prismic.Predicates.at('document.type', 'goal')
    )

    return results.map(this.normalizeGoal)
  }

  static async getIdeas() {
    const { results } = await this.api.query(
      Prismic.Predicates.at('document.type', 'idea')
    )

    return results.map(this.normalizeIdea)
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
        about_goals,
        about_ideas,
        about_playground,
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
      about_goals,
      about_ideas,
      about_playground,
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

  static normalizeGoal(goal) {
    const {
      id,
      last_publication_date,
      data: { deadline, description, title, updates }
    } = goal

    return {
      description,
      id,
      deadline: deadline && moment(deadline),
      title: RichText.asText(title),
      updated: moment(last_publication_date),
      updates: updates.map(({ content, time }) => ({
        content,
        time: time && moment(time)
      }))
    }
  }

  static normalizeIdea(idea) {
    const {
      id,
      last_publication_date,
      data: { description, links, status, title }
    } = idea

    return {
      description,
      id,
      status,
      links: links.map(({ link }) => Link.url(link)),
      title: RichText.asText(title),
      updated: moment(last_publication_date)
    }
  }

  static normalizeProject(project) {
    const {
      first_publication_date,
      id,
      last_publication_date,
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
        image: {
          url: hero,
          list: { url: thumb }
        }
      }
    } = post

    return {
      content,
      hero,
      id,
      tags,
      thumb,
      date: moment(first_publication_date),
      excerpt: RichText.asText(excerpt),
      featured: featured === 'Yes',
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
