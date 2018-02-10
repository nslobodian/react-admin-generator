import { call, put, select, take } from 'redux-saga/effects'
import request from 'sagas/api'
import {
  CREATE_NOTIFICATION_TAG_ATTEMPT,
  CREATE_NOTIFICATION_TAG_FAILURE,
  CREATE_NOTIFICATION_TAG_SUCCESS,
} from 'redux/NotificationTag'
import actions from 'redux-form/es/actions'
import { sagaErrorNotification } from 'utils/notifications'

export default function* () {
  while (true) {
    yield take(CREATE_NOTIFICATION_TAG_ATTEMPT)
    const { newTag } = yield select(({ form: { ManageTagsForm: { values } } }) => values)
    const body = {
      method: 'POST',
      body: {
        name: newTag,
      },
    }

    try {
      const tag = yield call(request, `notification-tags`, body)
      yield put({
        type: CREATE_NOTIFICATION_TAG_SUCCESS,
        tag,
      })
      yield put(actions.change('ManageTagsForm', 'newTag', null))
    } catch (error) {
      yield put(sagaErrorNotification(CREATE_NOTIFICATION_TAG_FAILURE))
    }
  }
}

