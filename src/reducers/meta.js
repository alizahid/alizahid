import {
  GET_META_PENDING,
  GET_META_SUCCESS,
  GET_META_FAILURE
} from '../actions/get-meta'

const initialState = {
  meta: {
    email: 'ali@designplox.co',
    subtitle:
      'Wannabe entrepreneur, mediocre speaker, self-proclaimed minimalist, founder designplox',
    title: 'Ali Zahid'
  },
  error: null,
  loading: false
}

export default (state = initialState, { meta, error, type }) => {
  switch (type) {
    case GET_META_PENDING:
      return {
        ...state,
        error: null,
        loading: true
      }

    case GET_META_SUCCESS:
      return {
        ...state,
        meta,
        loading: false
      }

    case GET_META_FAILURE:
      return {
        ...state,
        error,
        loading: false
      }

    default:
      return state
  }
}
