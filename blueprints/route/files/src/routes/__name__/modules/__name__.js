import createReducer from 'utils/createReducer'
import { actionCreator, reducerHelper } from 'store/helpers'

// ------------------------------------
// Constants
// ------------------------------------

export const GET_<%= pascalEntityName.toUpperCase() %>_ATTEMPT = '<%= pascalEntityName.toUpperCase() %>.GET_<%= pascalEntityName.toUpperCase() %>_ATTEMPT'
export const GET_<%= pascalEntityName.toUpperCase() %>_SUCCESSFULLY = '<%= pascalEntityName.toUpperCase() %>.GET_<%= pascalEntityName.toUpperCase() %>_SUCCESSFULLY'
export const GET_<%= pascalEntityName.toUpperCase() %>_FAILURE = '<%= pascalEntityName.toUpperCase() %>.GET_<%= pascalEntityName.toUpperCase() %>_FAILURE'

// ------------------------------------
// Actions
// ------------------------------------

export const get<%= pascalEntityName %>Attempt = actionCreator(GET_<%= pascalEntityName.toUpperCase() %>_ATTEMPT, 'id')

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  get<%= pascalEntityName %>Loading: false,
  <%= pascalEntityName %>: {},
}

export default createReducer(initialState, reducerHelper([
  GET_<%= pascalEntityName.toUpperCase() %>_ATTEMPT,
  GET_<%= pascalEntityName.toUpperCase() %>_SUCCESSFULLY,
  GET_<%= pascalEntityName.toUpperCase() %>_FAILURE,
]))
