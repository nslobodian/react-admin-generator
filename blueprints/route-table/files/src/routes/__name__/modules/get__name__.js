import { call, put, select, take } from 'redux-saga/effects'
import request from 'sagas/api'
import {
  GET_<%= pascalEntityName.toUpperCase() %>_ATTEMPT,
  GET_<%= pascalEntityName.toUpperCase() %>_SUCCESSFULLY,
  GET_<%= pascalEntityName.toUpperCase() %>_FAILURE,
} from './<%= pascalEntityName %>'
import { composeUrl } from 'utils/helpers'
import { sagaErrorNotification } from 'utils/notifications'

export default function*() {
  while (true) {
    yield take(GET_<%= pascalEntityName.toUpperCase() %>_ATTEMPT)
    const { pagination: { page, perPage }, searchValues } = yield select(({ <%= pascalEntityName %> }) => <%= pascalEntityName %>)
    const params = {
      ...searchValues,
      perPage,
      page: page || 0,
    }

    const url = `<%= dashesEntityName %>?${composeUrl(params)}`
    const body = { method: 'GET' }

    try {
      const { pagination, data } = yield call(request, url, body)
      yield put({
        type: GET_<%= pascalEntityName.toUpperCase() %>_SUCCESSFULLY,
        pagination,
        <%= pascalEntityName.toLowerCase() %>: data,
      })
    } catch (error) {
      yield put(sagaErrorNotification(GET_<%= pascalEntityName.toUpperCase() %>_FAILURE))
    }
  }
}
