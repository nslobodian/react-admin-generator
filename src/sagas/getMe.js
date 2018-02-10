import { call, put, select, take } from 'redux-saga/effects'
import { push } from 'react-router-redux/lib/actions'

import { GET_ME_ATTEMPT, getMeFailure, getMeSuccess } from 'redux/Auth'
import { getRole } from 'utils/roles'
import urls from 'utils/urls'
import request from 'sagas/api'

const getPathName = state => state.router.locationBeforeTransitions.pathname

export default function* () {
  while (true) {
    yield take(GET_ME_ATTEMPT)
    // const body = {
    //   method: 'GET',
    // }

    // try {
    //   const response = yield call(request, 'users/1', body)
    //   const pathname = yield select(getPathName)
    //   if (![urls.page404, urls.home].includes(pathname) && !response.roles.includes(getRole(pathname))) {
    //     yield put(push(urls.page404))
    //   }

    //   yield put(getMeSuccess(response))
    // } catch (error) {
    //   yield put(getMeFailure())
    // }
  }
}
