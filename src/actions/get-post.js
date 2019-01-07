import { api } from '../lib'

import {
  getPostsPending,
  getPostsSuccess,
  getPostsFailure,
  setPosts
} from './get-posts'

export default slug => async (dispatch, getState) => {
  try {
    const {
      posts: { posts }
    } = getState()

    const exists = posts.find(post => post.slug === slug)

    if (exists) {
      return
    }

    dispatch(getPostsPending())

    const post = await api.getPost(slug)

    const data = setPosts(posts, [post])

    dispatch(getPostsSuccess({}, data))
  } catch (error) {
    dispatch(getPostsFailure(error))
  }
}
