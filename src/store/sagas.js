import { fork } from 'redux-saga/effects'
import signIn from 'sagas/signIn'
import getMe from 'sagas/getMe'
import getUsers from 'sagas/getUsers'

export const makeRootSaga = () =>
  function * () {
    yield fork(signIn)
    yield fork(getMe)
    yield fork(getUsers)
  }

export const injectSagas = (store, { key, sagas }) => {
  if (!store.asyncSagas[key]) {
    store.asyncSagas[key] = sagas
    store.runSaga(function * () {
      yield sagas.map(saga => fork(saga))
    })
  }
}

export default makeRootSaga
