import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import form from 'redux-form/es/reducer'
import { reducer as notifs } from 'redux-notifications'
import { reducer as modal } from 'redux-modal'
import { loadingBarReducer } from 'react-redux-loading-bar'
import Auth from 'redux/Auth'
import Users from 'redux/Users'

export const makeRootReducer = (asyncReducers) =>
  combineReducers({
    ...asyncReducers,
    router,
    notifs,
    modal,
    form,
    loadingBar: loadingBarReducer,
    Auth,
    Users,
  })

export const injectReducer = (store, { key, reducer }) => {
  if (!store.asyncReducers[key]) {
    store.asyncReducers[key] = reducer
    store.replaceReducer(makeRootReducer(store.asyncReducers))
  }
}

export default makeRootReducer
