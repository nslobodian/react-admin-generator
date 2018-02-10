import createReducer from 'utils/createReducer'
import { actionCreator, reducerHelper } from 'store/helpers'

// ------------------------------------
// Constants
// ------------------------------------

export const GET_MEMBER_ATTEMPT = 'MEMBER.GET_MEMBER_ATTEMPT'
export const GET_MEMBER_SUCCESSFULLY = 'MEMBER.GET_MEMBER_SUCCESSFULLY'
export const GET_MEMBER_FAILURE = 'MEMBER.GET_MEMBER_FAILURE'

// ------------------------------------
// Actions
// ------------------------------------

export const getMemberAttempt = actionCreator(GET_MEMBER_ATTEMPT, 'id')

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  getMemberLoading: false,
  member: {},
}

export default createReducer(initialState, reducerHelper([
  GET_MEMBER_ATTEMPT,
  GET_MEMBER_SUCCESSFULLY,
  GET_MEMBER_FAILURE,
]))
