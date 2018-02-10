import { call, put, take } from 'redux-saga/effects'
import request from 'sagas/api'
import {
  GET_MOVEMENTS_ICONS_ATTEMPT,
  GET_MOVEMENTS_ICONS_FAILURE,
  GET_MOVEMENTS_ICONS_SUCCESSFULLY,
} from 'redux/NotificationTag'
import { sagaErrorNotification } from 'utils/notifications'

export function* getUserMovementsIcons () {
  while (true) {
    const { notifications } = yield take(GET_MOVEMENTS_ICONS_ATTEMPT)
    const body = {
      method: 'GET',
    }

    try {
      const { icons } = yield call(request, `${notifications ? 'notifications' : 'movements'}/icons`, body)
      yield put({
        type: GET_MOVEMENTS_ICONS_SUCCESSFULLY,
        movementIcons: icons,
      })
    } catch (error) {
      yield put(sagaErrorNotification(GET_MOVEMENTS_ICONS_FAILURE))
    }
  }
}
