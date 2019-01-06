import {
  GET_PAGES_PENDING,
  GET_PAGES_SUCCESS,
  GET_PAGES_FAILURE
} from '../actions/get-pages'

const initialState = {
  pages: [],
  error: null,
  loading: false
}

export default (state = initialState, { pages, error, type }) => {
  switch (type) {
    case GET_PAGES_PENDING:
      return {
        ...state,
        error: null,
        loading: true
      }

    case GET_PAGES_SUCCESS:
      return {
        ...state,
        pages,
        loading: false
      }

    case GET_PAGES_FAILURE:
      return {
        ...state,
        error,
        loading: false
      }

    default:
      return state
  }
}
