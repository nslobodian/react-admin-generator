import createReducer from 'utils/createReducer'
import { push } from 'react-router-redux/lib/actions'
import urls from 'utils/urls'
import {
  actionChangeFilterCreator,
  actionCreator,
  actionPaginationCreator,
  reducerHelper,
  actionInitFiltersCreator,
} from 'store/helpers'

// ------------------------------------
// Constants
// ------------------------------------

export const GET_USERS_ATTEMPT = 'Users.GET_USERS_ATTEMPT'
export const GET_USERS_SUCCESSFULLY = 'Users.GET_USERS_SUCCESSFULLY'
export const GET_USERS_FAILURE = 'Users.GET_USERS_FAILURE'
export const GET_USERS_RESET = 'Users.GET_USERS_RESET'

export const CHANGE_FILTERS = 'Users.CHANGE_FILTERS'
export const CHANGE_PAGINATION_PROPS = 'Users.CHANGE_PAGINATION_PROPS'
export const ADD_CUSTOM_FILTERS = 'Users.ADD_CUSTOM_FILTERS'
// ------------------------------------
// Actions
// ------------------------------------

export const getUsersAttempt = actionCreator(GET_USERS_ATTEMPT)
export const handleChangeFilter = actionChangeFilterCreator(CHANGE_FILTERS, getUsersAttempt)
export const initChangeFilter = actionInitFiltersCreator(CHANGE_FILTERS, getUsersAttempt)
export const getUsersPagination = actionPaginationCreator(CHANGE_PAGINATION_PROPS, getUsersAttempt)
export const goToUserDetails = url => push(`${urls.member}/${url}`)
export const resetFilters = actionCreator(GET_USERS_RESET)
export const addCustomValues = actionCreator(ADD_CUSTOM_FILTERS, 'searchValues')

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  getUsersLoading: false,
  users: [],
  searchValues: {},
  pagination: {
    page: 1,
    perPage: 20,
    pages: 1,
    count: 0,
  },
}

export default createReducer(initialState, reducerHelper([
  GET_USERS_ATTEMPT,
  GET_USERS_FAILURE,
  GET_USERS_SUCCESSFULLY,
  CHANGE_PAGINATION_PROPS,
  CHANGE_FILTERS,
  GET_USERS_RESET,
  ADD_CUSTOM_FILTERS,
]))
