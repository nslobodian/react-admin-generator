import createReducer from 'utils/createReducer'
import { push } from 'react-router-redux/lib/actions'
import urls from 'utils/urls'
import { actionCreator, actionSubmitCreator } from 'store/helpers'
import { errorNotification } from 'utils/notifications'

// ------------------------------------
// Constants
// ------------------------------------

export const SIGN_IN_ATTEMPT = 'AUTH.SIGN_IN_ATTEMPT'
export const SIGN_IN_SUCCESS = 'AUTH.SIGN_IN_SUCCESS'
export const SIGN_IN_FAILURE = 'AUTH.SIGN_IN_FAILURE'

export const GET_ME_ATTEMPT = 'AUTH.GET_ME_ATTEMPT'
export const GET_ME_SUCCESS = 'AUTH.GET_ME_SUCCESS'
export const GET_ME_FAILURE = 'AUTH.GET_ME_FAILURE'

export const CHECK_TOKEN = 'AUTH.CHECK_TOKEN'
export const LOGOUT_ATTEMPT = 'AUTH.LOGOUT'

// ------------------------------------
// Actions
// ------------------------------------

export const signInAttempt = actionSubmitCreator(SIGN_IN_ATTEMPT)
export const signInSuccess = actionCreator(SIGN_IN_SUCCESS)
export const signInFailure = actionCreator(SIGN_IN_FAILURE)

export const logout = () => dispatch => {
  localStorage.removeItem('token')
  dispatch(push(urls.login))
  dispatch({ type: LOGOUT_ATTEMPT })
}

export const getMeAttempt = actionCreator(GET_ME_ATTEMPT)
export const getMeSuccess = actionCreator(GET_ME_SUCCESS, 'admin')
export const getMeFailure = actionCreator(GET_ME_FAILURE)

export const checkToken = () => dispatch => {
  dispatch({ type: CHECK_TOKEN })
  dispatch(localStorage.getItem('token') ? getMeAttempt() : logout())
}

export const removeToken = () => dispatch => {
  dispatch(errorNotification('Your login session has been expired'))
  dispatch(logout())
}
// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  signInLoading: false,
  loggedIn: false,
  admin: {},
  adminLoading: false,
}

export default createReducer(initialState, {
  [SIGN_IN_ATTEMPT]: () => ({ signInLoading: true }),
  [SIGN_IN_SUCCESS]: () => ({
    signInLoading: false,
    loggedIn: true,
  }),
  [SIGN_IN_FAILURE]: () => ({ signInLoading: false }),
  [LOGOUT_ATTEMPT]: () => ({ loggedIn: false }),
  [GET_ME_ATTEMPT]: () => ({ adminLoading: true }),
  [GET_ME_SUCCESS]: (state, { admin }) => ({
    adminLoading: false,
    loggedIn: true,
    admin,
  }),
  [GET_ME_FAILURE]: () => ({ adminLoading: false }),
  [CHECK_TOKEN]: () => ({ loggedIn: true }),
})
