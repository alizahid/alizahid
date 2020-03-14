import axios from 'axios'

import { Post } from '../types'

class API {
  async posts(): Promise<Post[]> {
    const {
      data: { posts }
    } = await axios.get(`${process.env.URI}/api/posts`)

    return posts
  }
}

export const api = new API()
