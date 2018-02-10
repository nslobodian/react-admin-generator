import createReducer from 'utils/createReducer'
import { actionChangeFilterCreator, actionCreator, actionPaginationCreator, reducerHelper } from 'store/helpers'

// ------------------------------------
// Constants
// ------------------------------------

export const GET_TEAMS_ATTEMPT = 'TEAMS.GET_TEAMS_ATTEMPT'
export const GET_TEAMS_SUCCESSFULLY = 'TEAMS.GET_TEAMS_SUCCESSFULLY'
export const GET_TEAMS_FAILURE = 'TEAMS.GET_TEAMS_FAILURE'
export const GET_TEAMS_PROPS = 'TEAMS.GET_TEAMS_PROPS'
export const GET_TEAMS_FILTERS = 'TEAMS.GET_TEAMS_FILTERS'
export const GET_TEAMS_RESET = 'TEAMS.GET_TEAMS_RESET'

export const DELETE_TEAMS_ATTEMPT = 'TEAMS.DELETE_TEAMS_ATTEMPT'
export const DELETE_TEAMS_SUCCESSFULLY = 'TEAMS.DELETE_TEAMS_SUCCESSFULLY'
export const DELETE_TEAMS_FAILURE = 'TEAMS.DELETE_TEAMS_FAILURE'

// ------------------------------------
// Actions
// ------------------------------------

export const getTeamsAttempt = actionCreator(GET_TEAMS_ATTEMPT)
export const changeTeamsPagination = actionPaginationCreator(GET_TEAMS_PROPS, getTeamsAttempt)
export const changeTeamsFilter = actionChangeFilterCreator(GET_TEAMS_FILTERS, getTeamsAttempt)
export const resetFilters = actionCreator(GET_TEAMS_PROPS)

export const deleteTeamsAttempt = actionCreator(DELETE_TEAMS_ATTEMPT, 'id')

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  getTeamsLoading: false,
  teams: [],
  searchValues: {},
  pagination: {
    page: 1,
    perPage: 10,
    pages: 1,
    totalCount: 0
  }
}

export default createReducer(initialState, reducerHelper([
  GET_TEAMS_ATTEMPT,
  GET_TEAMS_SUCCESSFULLY,
  GET_TEAMS_FAILURE,
  GET_TEAMS_PROPS,
  GET_TEAMS_RESET,
  GET_TEAMS_FILTERS,
  DELETE_TEAMS_ATTEMPT,
  DELETE_TEAMS_SUCCESSFULLY,
  DELETE_TEAMS_FAILURE,
]))
