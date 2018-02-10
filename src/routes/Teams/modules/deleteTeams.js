import { call, put, select, take } from 'redux-saga/effects'
import request from 'sagas/api'
import {
  DELETE_TEAMS_ATTEMPT,
  DELETE_TEAMS_SUCCESSFULLY,
  DELETE_TEAMS_FAILURE,
  getTeamsAttempt
} from './Teams'
import { composeUrl } from 'utils/helpers'
import { sagaErrorNotification, successNotification } from 'utils/notifications'

export default function*() {
  while (true) {
    const { id } = yield take(DELETE_TEAMS_ATTEMPT)

    const url = `teams/${id}`
    const body = { method: 'DELETE' }

    try {
      yield call(request, url, body)
      yield put({ type: DELETE_TEAMS_SUCCESSFULLY })
      yield put(getTeamsAttempt())
      yield put(successNotification('Teams delete successfully'))
    } catch (error) {
      yield put(sagaErrorNotification(DELETE_TEAMS_FAILURE))
    }
  }
}
