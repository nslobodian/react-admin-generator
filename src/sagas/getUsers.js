import { call, put, select, take } from 'redux-saga/effects'

import { GET_USERS_ATTEMPT, GET_USERS_FAILURE, GET_USERS_SUCCESSFULLY } from 'redux/Users'
import { sagaErrorNotification } from 'utils/notifications'
import paginationHelper from 'utils/paginationHelper'
import { composeUrl } from 'utils/helpers'
import request from 'sagas/api'
import urls from 'utils/urls'

// const data = {
//   pagination: {},
//   where: {},
//   users: [
//     { expa_id: '923424', full_name: 'Luke Skywalker', position: 'jedi', area: 'igv', ixp: 'completed', ldm: false },
//   ],
// }

export default function* () {
  while (true) {
    yield take(GET_USERS_ATTEMPT)
    const { searchValues, pagination } = yield select(({ Users }) => Users)
    const body = { method: 'GET' }

    try {
      // const data = yield call(request, `users?${composeUrl({ ...searchValues, ...pagination })}`, body)
      const data = yield call(request, `users`, body)
      console.log(data)
      yield put({ type: GET_USERS_SUCCESSFULLY, pagination: data.pagination, users: data.data })
      // yield call(paginationHelper, urls.members, data.pagination, data.where, 'UsersTable')
    } catch (error) {
      yield put(sagaErrorNotification(GET_USERS_FAILURE))
    }
  }
}
