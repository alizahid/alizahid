import { api } from '../lib'

export const GET_PAGES_PENDING = 'GET_PAGES_PENDING'
export const GET_PAGES_SUCCESS = 'GET_PAGES_SUCCESS'
export const GET_PAGES_FAILURE = 'GET_PAGES_FAILURE'

export const getPagesPending = () => ({
  type: GET_PAGES_PENDING
})

export const getPagesSuccess = pages => ({
  pages,
  type: GET_PAGES_SUCCESS
})

export const getPagesFailure = error => ({
  error,
  type: GET_PAGES_FAILURE
})

export default () => async dispatch => {
  dispatch(getPagesPending())

  try {
    const pages = await api.getPages()

    dispatch(getPagesSuccess(pages))
  } catch (error) {
    dispatch(getPagesFailure(error))
  }
}
