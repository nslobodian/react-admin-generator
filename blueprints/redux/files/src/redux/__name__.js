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

export const get<%= pascalEntityName %>Attempt = actionCreator(GET_<%= pascalEntityName.toUpperCase() %>_ATTEMPT)

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
	get<%= pascalEntityName.toUpperCase() %>: false
}

const reducers = reducerHelper([
	GET_<%= pascalEntityName.toUpperCase() %>_ATTEMPT,
	GET_<%= pascalEntityName.toUpperCase() %>_SUCCESSFULLY,
	GET_<%= pascalEntityName.toUpperCase() %>_FAILURE
])

export default createReducer(initialState, {
	...reducers,
})
