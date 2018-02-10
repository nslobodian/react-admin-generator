import createReducer from 'utils/createReducer'

// ------------------------------------
// Constants
// ------------------------------------

export const HOME_FETCH = 'HOME_FETCH'

// ------------------------------------
// Actions
// ------------------------------------

export const homeFetch = (params) => (dispatch, getStore) => {
  dispatch({
    type: HOME_FETCH,
    params,
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  fetching: false,
}

export default createReducer(initialState, {
  [HOME_FETCH]: (state, action) => ({
    fetching: false,
  }),
})
