import { call, put, select, take } from 'redux-saga/effects'
import request from 'sagas/api'
import {
  DELETE_PROJECTS_ATTEMPT,
  DELETE_PROJECTS_SUCCESSFULLY,
  DELETE_PROJECTS_FAILURE,
  getProjectsAttempt
} from './Projects'
import { composeUrl } from 'utils/helpers'
import { sagaErrorNotification, successNotification } from 'utils/notifications'

export default function*() {
  while (true) {
    const { id } = yield take(DELETE_PROJECTS_ATTEMPT)

    const url = `projects/${id}`
    const body = { method: 'DELETE' }

    try {
      yield call(request, url, body)
      yield put({ type: DELETE_PROJECTS_SUCCESSFULLY })
      yield put(getProjectsAttempt())
      yield put(successNotification('Projects delete successfully'))
    } catch (error) {
      yield put(sagaErrorNotification(DELETE_PROJECTS_FAILURE))
    }
  }
}
