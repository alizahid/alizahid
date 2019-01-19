import {
  GET_GOALS_PENDING,
  GET_GOALS_SUCCESS,
  GET_GOALS_FAILURE
} from '../actions/get-goals'

const initialState = {
  goals: [],
  error: null,
  loading: false
}

export default (state = initialState, { goals, error, type }) => {
  switch (type) {
    case GET_GOALS_PENDING:
      return {
        ...state,
        error: null,
        loading: true
      }

    case GET_GOALS_SUCCESS:
      return {
        ...state,
        goals,
        loading: false
      }

    case GET_GOALS_FAILURE:
      return {
        ...state,
        error,
        loading: false
      }

    default:
      return state
  }
}
