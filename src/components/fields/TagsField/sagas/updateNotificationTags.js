import { call, put, select, take } from 'redux-saga/effects'
import request from 'sagas/api'
import { UPDATE_TAG_ATTEMPT, UPDATE_TAG_FAILURE, UPDATE_TAG_SUCCESS } from 'redux/NotificationTag'
import { sagaErrorNotification } from 'utils/notifications'

export default function* () {
  while (true) {
    const { updatedTagId } = yield take(UPDATE_TAG_ATTEMPT)
    const name = yield select(({ form: { ManageTagsForm: { values } } }) => values[updatedTagId])
    const body = {
      method: 'PUT',
      body: { name },
    }

    try {
      const tag = yield call(request, `notification-tags/${updatedTagId}`, body)
      yield put({
        type: UPDATE_TAG_SUCCESS,
        tag,
      })
    } catch (error) {
      yield put(sagaErrorNotification(UPDATE_TAG_FAILURE))
    }
  }
}
