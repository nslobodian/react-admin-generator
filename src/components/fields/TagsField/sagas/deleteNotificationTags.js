import { call, put, take } from 'redux-saga/effects'
import request from 'sagas/api'
import { DELETE_TAG_ATTEMPT, DELETE_TAG_FAILURE, DELETE_TAG_SUCCESS } from 'redux/NotificationTag'
import { sagaErrorNotification } from 'utils/notifications'

export default function* () {
  while (true) {
    const { id } = yield take(DELETE_TAG_ATTEMPT)
    const body = {
      method: 'DELETE',
    }

    try {
      const tag = yield call(request, `notification-tags/${id}`, body)
      yield put({
        type: DELETE_TAG_SUCCESS,
        tag,
      })
    } catch (error) {
      yield put(sagaErrorNotification(DELETE_TAG_FAILURE))
    }
  }
}

