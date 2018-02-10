import { call, put, select, take } from 'redux-saga/effects'
import request from 'sagas/api'
import {
  DELETE_<%= pascalEntityName.toUpperCase() %>_ATTEMPT,
  DELETE_<%= pascalEntityName.toUpperCase() %>_SUCCESSFULLY,
  DELETE_<%= pascalEntityName.toUpperCase() %>_FAILURE,
  get<%= pascalEntityName %>Attempt
} from './<%= pascalEntityName %>'
import { composeUrl } from 'utils/helpers'
import { sagaErrorNotification, successNotification } from 'utils/notifications'

export default function*() {
  while (true) {
    const { id } = yield take(DELETE_<%= pascalEntityName.toUpperCase() %>_ATTEMPT)

    const url = `<%= dashesEntityName %>/${id}`
    const body = { method: 'DELETE' }

    try {
      yield call(request, url, body)
      yield put({ type: DELETE_<%= pascalEntityName.toUpperCase() %>_SUCCESSFULLY })
      yield put(get<%= pascalEntityName %>Attempt())
      yield put(successNotification('<%= pascalEntityName %> delete successfully'))
    } catch (error) {
      yield put(sagaErrorNotification(DELETE_<%= pascalEntityName.toUpperCase() %>_FAILURE))
    }
  }
}
