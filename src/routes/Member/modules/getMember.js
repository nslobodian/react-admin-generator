import { call, put, select, take } from 'redux-saga/effects'
import request from 'sagas/api'
import {
  GET_MEMBER_ATTEMPT,
  GET_MEMBER_SUCCESSFULLY,
  GET_MEMBER_FAILURE,
} from './Member'
// import { composeUrl } from 'utils/helpers'
import { sagaErrorNotification } from 'utils/notifications'

// const member = {
//   expa_id: '923424',
//   full_name: 'Luke Skywalker',
//   profile_picture: 'http://thecatapi.com/api/images/get?format=src&type=gif',
//   position: 'jedi',
//   area: 'igv',
//   ixp: 'completed',
//   project: 'Rebelians',
//   active_task: 'destroy death star',
//   ldm: {
//     empowering_others: 31,
//     self_aware: 44,
//     solution_oriented: 36,
//     world_citizen: 27,
//   },
// }

export default function*() {
  while (true) {
    const { id } = yield take(GET_MEMBER_ATTEMPT)

    // const url = `purchase-orders?${composeUrl(params)}`
    const url = `users/${id}`
    const body = { method: 'GET' }

    try {
      const { data } = yield call(request, url, body)
      yield put({
        type: GET_MEMBER_SUCCESSFULLY,
        member: data,
      })
    } catch (error) {
      yield put(sagaErrorNotification(GET_MEMBER_FAILURE))
    }
  }
}
