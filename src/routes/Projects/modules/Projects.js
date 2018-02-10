import createReducer from 'utils/createReducer'
import { actionChangeFilterCreator, actionCreator, actionPaginationCreator, reducerHelper } from 'store/helpers'

// ------------------------------------
// Constants
// ------------------------------------

export const GET_PROJECTS_ATTEMPT = 'PROJECTS.GET_PROJECTS_ATTEMPT'
export const GET_PROJECTS_SUCCESSFULLY = 'PROJECTS.GET_PROJECTS_SUCCESSFULLY'
export const GET_PROJECTS_FAILURE = 'PROJECTS.GET_PROJECTS_FAILURE'
export const GET_PROJECTS_PROPS = 'PROJECTS.GET_PROJECTS_PROPS'
export const GET_PROJECTS_FILTERS = 'PROJECTS.GET_PROJECTS_FILTERS'
export const GET_PROJECTS_RESET = 'PROJECTS.GET_PROJECTS_RESET'

export const DELETE_PROJECTS_ATTEMPT = 'PROJECTS.DELETE_PROJECTS_ATTEMPT'
export const DELETE_PROJECTS_SUCCESSFULLY = 'PROJECTS.DELETE_PROJECTS_SUCCESSFULLY'
export const DELETE_PROJECTS_FAILURE = 'PROJECTS.DELETE_PROJECTS_FAILURE'

// ------------------------------------
// Actions
// ------------------------------------

export const getProjectsAttempt = actionCreator(GET_PROJECTS_ATTEMPT)
export const changeProjectsPagination = actionPaginationCreator(GET_PROJECTS_PROPS, getProjectsAttempt)
export const changeProjectsFilter = actionChangeFilterCreator(GET_PROJECTS_FILTERS, getProjectsAttempt)
export const resetFilters = actionCreator(GET_PROJECTS_PROPS)

export const deleteProjectsAttempt = actionCreator(DELETE_PROJECTS_ATTEMPT, 'id')

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  getProjectsLoading: false,
  projects: [],
  searchValues: {},
  pagination: {
    page: 0,
    perPage: 10,
    pages: 1,
    totalCount: 0,
  },
}

export default createReducer(initialState, reducerHelper([
  GET_PROJECTS_ATTEMPT,
  GET_PROJECTS_SUCCESSFULLY,
  GET_PROJECTS_FAILURE,
  GET_PROJECTS_PROPS,
  GET_PROJECTS_RESET,
  GET_PROJECTS_FILTERS,
  DELETE_PROJECTS_ATTEMPT,
  DELETE_PROJECTS_SUCCESSFULLY,
  DELETE_PROJECTS_FAILURE,
]))
