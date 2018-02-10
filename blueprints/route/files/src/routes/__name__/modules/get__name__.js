import { call, put, select, take } from 'redux-saga/effects'
import request from 'sagas/api'
import {
  GET_<%= pascalEntityName.toUpperCase() %>_ATTEMPT,
  GET_<%= pascalEntityName.toUpperCase() %>_SUCCESSFULLY,
  GET_<%= pascalEntityName.toUpperCase() %>_FAILURE,
} from './<%= pascalEntityName %>'
// import { composeUrl } from 'utils/helpers'
import { sagaErrorNotification } from 'utils/notifications'

export default function*() {
  while (true) {
    const { id } = yield take(GET_<%= pascalEntityName.toUpperCase() %>_ATTEMPT)

    //const url = `purchase-orders?${composeUrl(params)}`
    const url = `purchase-orders/${id}}`
    const body = { method: 'GET' }

    try {
      const { <%= pascalEntityName %> } = yield call(request, url, body)
      yield put({
        type: GET_<%= pascalEntityName.toUpperCase() %>_SUCCESSFULLY,
      <%= pascalEntityName %>
      })
    } catch (error) {
      yield put(sagaErrorNotification(GET_<%= pascalEntityName.toUpperCase() %>_FAILURE))
    }
  }
}
