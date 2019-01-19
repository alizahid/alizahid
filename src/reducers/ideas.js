import {
  GET_IDEAS_PENDING,
  GET_IDEAS_SUCCESS,
  GET_IDEAS_FAILURE
} from '../actions/get-ideas'

const initialState = {
  ideas: [],
  error: null,
  loading: false
}

export default (state = initialState, { ideas, error, type }) => {
  switch (type) {
    case GET_IDEAS_PENDING:
      return {
        ...state,
        error: null,
        loading: true
      }

    case GET_IDEAS_SUCCESS:
      return {
        ...state,
        ideas,
        loading: false
      }

    case GET_IDEAS_FAILURE:
      return {
        ...state,
        error,
        loading: false
      }

    default:
      return state
  }
}
