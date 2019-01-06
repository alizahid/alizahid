import { api } from '../lib'

export const GET_META_PENDING = 'GET_META_PENDING'
export const GET_META_SUCCESS = 'GET_META_SUCCESS'
export const GET_META_FAILURE = 'GET_META_FAILURE'

export const getMetaPending = () => ({
  type: GET_META_PENDING
})

export const getMetaSuccess = meta => ({
  meta,
  type: GET_META_SUCCESS
})

export const getMetaFailure = error => ({
  error,
  type: GET_META_FAILURE
})

export default () => async dispatch => {
  dispatch(getMetaPending())

  try {
    const meta = await api.getMeta()

    dispatch(getMetaSuccess(meta))
  } catch (error) {
    dispatch(getMetaFailure(error))
  }
}
