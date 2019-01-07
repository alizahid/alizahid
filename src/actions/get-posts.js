import update from 'immutability-helper'
import orderBy from 'lodash.orderby'
import uniqBy from 'lodash.uniqby'

import { api } from '../lib'

export const GET_POSTS_PENDING = 'GET_POSTS_PENDING'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'

export const getPostsPending = () => ({
  type: GET_POSTS_PENDING
})

export const getPostsSuccess = (meta, posts) => ({
  meta,
  posts,
  type: GET_POSTS_SUCCESS
})

export const getPostsFailure = error => ({
  error,
  type: GET_POSTS_FAILURE
})

export const setPosts = (posts, fresh) =>
  orderBy(
    uniqBy(
      update(posts, {
        $push: fresh
      }),
      'id'
    ),
    'date',
    'desc'
  )

export default page => async (dispatch, getState) => {
  dispatch(getPostsPending())

  try {
    const {
      posts: { posts }
    } = getState()

    const { meta, posts: fresh } = await api.getPosts(page)

    const data = setPosts(posts, fresh)

    dispatch(getPostsSuccess(meta, data))
  } catch (error) {
    dispatch(getPostsFailure(error))
  }
}
