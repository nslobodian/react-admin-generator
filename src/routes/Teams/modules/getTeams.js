import { call, put, select, take } from 'redux-saga/effects'
import request from 'sagas/api'
import {
  GET_TEAMS_ATTEMPT,
  GET_TEAMS_SUCCESSFULLY,
  GET_TEAMS_FAILURE,
} from './Teams'
import { composeUrl } from 'utils/helpers'
import { sagaErrorNotification } from 'utils/notifications'

export default function*() {
  while (true) {
    yield take(GET_TEAMS_ATTEMPT)
    const { pagination: { page, perPage }, searchValues } = yield select(({ Teams }) => Teams)
    const params = {
      ...searchValues,
      perPage,
      page: page || 0,
    }

    const url = `teams?${composeUrl(params)}`
    const body = { method: 'GET' }

    try {
      const { pagination, data } = yield call(request, url, body)
      yield put({
        type: GET_TEAMS_SUCCESSFULLY,
        pagination,
        teams: data,
      })
    } catch (error) {
      yield put(sagaErrorNotification(GET_TEAMS_FAILURE))
    }
  }
}
