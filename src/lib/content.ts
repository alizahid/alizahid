import { sortBy } from "lodash";
// @ts-ignore
import { Link, RichText } from "prismic-reactjs";
import Prismic from "prismic-javascript";
import moment from "moment";

class Content {
  client: any;

  async init() {
    this.client = await Prismic.api("https://alizahid.cdn.prismic.io/api/v2");
  }

  async fetchPosts(page: number = 1) {
    if (!this.client) {
      await this.init();
    }

    const { results, total_pages } = await this.client.query(
      Prismic.Predicates.at("document.type", "post"),
      {
        page
      }
    );

    return {
      meta: {
        more: total_pages > page,
        next: total_pages > page && page + 1,
        total: total_pages
      },
      posts: results.map(this.normalizePost)
    };
  }

  async fetchPost(slug: string) {
    if (!this.client) {
      await this.init();
    }

    const post = await this.client.getByUID("post", slug);

    return this.normalizePost(post);
  }

  async fetchProjects() {
    if (!this.client) {
      await this.init();
    }

    const { results } = await this.client.query(
      Prismic.Predicates.at("document.type", "project")
    );

    return sortBy(results.map(this.normalizeProject), "order");
  }

  normalizePost(post: any) {
    const {
      first_publication_date,
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
    } = post;

    return {
      content,
      hero,
      tags,
      thumb,
      created: moment(first_publication_date),
      excerpt: RichText.asText(excerpt),
      featured: featured === "Yes",
      slug: uid,
      title: RichText.asText(title),
      updated: moment(last_publication_date)
    };
  }

  normalizeProject(project: any) {
    const {
      first_publication_date,
      last_publication_date,
      uid,
      data: {
        content,
        links,
        order,
        title,
        image: { url }
      }
    } = project;

    return {
      content,
      order,
      created: moment(first_publication_date),
      image: url,
      links: links.map(({ label, link }: any) => ({
        label: RichText.asText(label),
        link: Link.url(link)
      })),
      slug: uid,
      title: RichText.asText(title),
      updated: moment(last_publication_date)
    };
  }
}

export default new Content();
