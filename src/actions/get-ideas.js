import orderBy from 'lodash.orderby'

import { api } from '../lib'

export const GET_IDEAS_PENDING = 'GET_IDEAS_PENDING'
export const GET_IDEAS_SUCCESS = 'GET_IDEAS_SUCCESS'
export const GET_IDEAS_FAILURE = 'GET_IDEAS_FAILURE'

export const getIdeasPending = () => ({
  type: GET_IDEAS_PENDING
})

export const getIdeasSuccess = ideas => ({
  ideas,
  type: GET_IDEAS_SUCCESS
})

export const getIdeasFailure = error => ({
  error,
  type: GET_IDEAS_FAILURE
})

export default () => async dispatch => {
  dispatch(getIdeasPending())

  try {
    const ideas = await api.getIdeas()

    const data = orderBy(ideas, 'updated', 'desc')

    dispatch(getIdeasSuccess(data))
  } catch (error) {
    dispatch(getIdeasFailure(error))
  }
}
