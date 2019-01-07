import orderBy from 'lodash.orderby'

import { api } from '../lib'

export const GET_PROJECTS_PENDING = 'GET_PROJECTS_PENDING'
export const GET_PROJECTS_SUCCESS = 'GET_PROJECTS_SUCCESS'
export const GET_PROJECTS_FAILURE = 'GET_PROJECTS_FAILURE'

export const getProjectsPending = () => ({
  type: GET_PROJECTS_PENDING
})

export const getProjectsSuccess = projects => ({
  projects,
  type: GET_PROJECTS_SUCCESS
})

export const getProjectsFailure = error => ({
  error,
  type: GET_PROJECTS_FAILURE
})

export default () => async dispatch => {
  dispatch(getProjectsPending())

  try {
    const projects = await api.getProjects()

    const data = orderBy(projects, 'updated', 'desc')

    dispatch(getProjectsSuccess(data))
  } catch (error) {
    dispatch(getProjectsFailure(error))
  }
}
