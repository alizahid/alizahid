import orderBy from 'lodash.orderby'

import { api } from '../lib'

export const GET_GOALS_PENDING = 'GET_GOALS_PENDING'
export const GET_GOALS_SUCCESS = 'GET_GOALS_SUCCESS'
export const GET_GOALS_FAILURE = 'GET_GOALS_FAILURE'

export const getGoalsPending = () => ({
  type: GET_GOALS_PENDING
})

export const getGoalsSuccess = goals => ({
  goals,
  type: GET_GOALS_SUCCESS
})

export const getGoalsFailure = error => ({
  error,
  type: GET_GOALS_FAILURE
})

export default () => async dispatch => {
  dispatch(getGoalsPending())

  try {
    const goals = await api.getGoals()

    const data = orderBy(goals, 'updated', 'desc')

    dispatch(getGoalsSuccess(data))
  } catch (error) {
    dispatch(getGoalsFailure(error))
  }
}
