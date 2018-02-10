import { call, put, take } from 'redux-saga/effects'
import { push } from 'react-router-redux/lib/actions'
import SubmissionError from 'redux-form/es/SubmissionError'

import { SIGN_IN_ATTEMPT, signInFailure, signInSuccess, getMeAttempt } from 'redux/Auth'
import { errorNotification } from 'utils/notifications'
import request from 'sagas/api'
import urls from 'utils/urls'

export default function* () {
  while (true) {
    const { values, resolve, reject } = yield take(SIGN_IN_ATTEMPT)
    const body = {
      method: 'POST',
      body: values,
    }

    try {
      const res = yield call(request, 'login', body)
      localStorage.setItem('token', res.token)
      yield put(push(urls.home))
      yield put(signInSuccess())
      yield put(getMeAttempt())
      resolve()
    } catch (error) {
      yield put(signInFailure())
      if (error.statusCode === '404') {
        reject(new SubmissionError({ password: 'wrong credentials' }))
      } else {
        yield put(errorNotification())
        resolve()
      }
    }
  }
}

