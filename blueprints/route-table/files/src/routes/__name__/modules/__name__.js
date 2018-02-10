import createReducer from 'utils/createReducer'
import { actionChangeFilterCreator, actionCreator, actionPaginationCreator, reducerHelper } from 'store/helpers'

// ------------------------------------
// Constants
// ------------------------------------

export const GET_<%= pascalEntityName.toUpperCase() %>_ATTEMPT = '<%= pascalEntityName.toUpperCase() %>.GET_<%= pascalEntityName.toUpperCase() %>_ATTEMPT'
export const GET_<%= pascalEntityName.toUpperCase() %>_SUCCESSFULLY = '<%= pascalEntityName.toUpperCase() %>.GET_<%= pascalEntityName.toUpperCase() %>_SUCCESSFULLY'
export const GET_<%= pascalEntityName.toUpperCase() %>_FAILURE = '<%= pascalEntityName.toUpperCase() %>.GET_<%= pascalEntityName.toUpperCase() %>_FAILURE'
export const GET_<%= pascalEntityName.toUpperCase() %>_PROPS = '<%= pascalEntityName.toUpperCase() %>.GET_<%= pascalEntityName.toUpperCase() %>_PROPS'
export const GET_<%= pascalEntityName.toUpperCase() %>_FILTERS = '<%= pascalEntityName.toUpperCase() %>.GET_<%= pascalEntityName.toUpperCase() %>_FILTERS'
export const GET_<%= pascalEntityName.toUpperCase() %>_RESET = '<%= pascalEntityName.toUpperCase() %>.GET_<%= pascalEntityName.toUpperCase() %>_RESET'

export const DELETE_<%= pascalEntityName.toUpperCase() %>_ATTEMPT = '<%= pascalEntityName.toUpperCase() %>.DELETE_<%= pascalEntityName.toUpperCase() %>_ATTEMPT'
export const DELETE_<%= pascalEntityName.toUpperCase() %>_SUCCESSFULLY = '<%= pascalEntityName.toUpperCase() %>.DELETE_<%= pascalEntityName.toUpperCase() %>_SUCCESSFULLY'
export const DELETE_<%= pascalEntityName.toUpperCase() %>_FAILURE = '<%= pascalEntityName.toUpperCase() %>.DELETE_<%= pascalEntityName.toUpperCase() %>_FAILURE'

// ------------------------------------
// Actions
// ------------------------------------

export const get<%= pascalEntityName %>Attempt = actionCreator(GET_<%= pascalEntityName.toUpperCase() %>_ATTEMPT)
export const change<%= pascalEntityName %>Pagination = actionPaginationCreator(GET_<%= pascalEntityName.toUpperCase() %>_PROPS, get<%= pascalEntityName %>Attempt)
export const change<%= pascalEntityName %>Filter = actionChangeFilterCreator(GET_<%= pascalEntityName.toUpperCase() %>_FILTERS, get<%= pascalEntityName %>Attempt)
export const resetFilters = actionCreator(GET_<%= pascalEntityName.toUpperCase() %>_PROPS)

export const delete<%= pascalEntityName %>Attempt = actionCreator(DELETE_<%= pascalEntityName.toUpperCase() %>_ATTEMPT, 'id')

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  get<%= pascalEntityName %>Loading: false,
  <%= pascalEntityName.toLowerCase() %>: [],
  searchValues: {},
  pagination: {
    page: 1,
    perPage: 10,
    pages: 1,
    totalCount: 0
  }
}

export default createReducer(initialState, reducerHelper([
  GET_<%= pascalEntityName.toUpperCase() %>_ATTEMPT,
  GET_<%= pascalEntityName.toUpperCase() %>_SUCCESSFULLY,
  GET_<%= pascalEntityName.toUpperCase() %>_FAILURE,
  GET_<%= pascalEntityName.toUpperCase() %>_PROPS,
  GET_<%= pascalEntityName.toUpperCase() %>_RESET,
  GET_<%= pascalEntityName.toUpperCase() %>_FILTERS,
  DELETE_<%= pascalEntityName.toUpperCase() %>_ATTEMPT,
  DELETE_<%= pascalEntityName.toUpperCase() %>_SUCCESSFULLY,
  DELETE_<%= pascalEntityName.toUpperCase() %>_FAILURE,
]))
