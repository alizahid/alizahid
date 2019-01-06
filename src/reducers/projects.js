import {
  GET_PROJECTS_PENDING,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_FAILURE
} from '../actions/get-projects'

const initialState = {
  projects: [],
  error: null,
  loading: false
}

export default (state = initialState, { projects, error, type }) => {
  switch (type) {
    case GET_PROJECTS_PENDING:
      return {
        ...state,
        error: null,
        loading: true
      }

    case GET_PROJECTS_SUCCESS:
      return {
        ...state,
        projects,
        loading: false
      }

    case GET_PROJECTS_FAILURE:
      return {
        ...state,
        error,
        loading: false
      }

    default:
      return state
  }
}
