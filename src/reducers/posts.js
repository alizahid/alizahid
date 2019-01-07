import {
  GET_POSTS_PENDING,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE
} from '../actions/get-posts'

const initialState = {
  meta: {},
  posts: [],
  error: null,
  loading: false
}

export default (state = initialState, { meta, posts, error, type }) => {
  switch (type) {
    case GET_POSTS_PENDING:
      return {
        ...state,
        error: null,
        loading: true
      }

    case GET_POSTS_SUCCESS:
      return {
        ...state,
        meta,
        posts,
        loading: false
      }

    case GET_POSTS_FAILURE:
      return {
        ...state,
        error,
        loading: false
      }

    default:
      return state
  }
}
