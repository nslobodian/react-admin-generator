import { call, put, select, take } from 'redux-saga/effects'
import request from 'sagas/api'
import {
  GET_PROJECTS_ATTEMPT,
  GET_PROJECTS_SUCCESSFULLY,
  GET_PROJECTS_FAILURE,
} from './Projects'
import { composeUrl } from 'utils/helpers'
import { sagaErrorNotification } from 'utils/notifications'

// const projects = [
//   {projectId: '1', name: 'Winter Flame', leader: {userId: 4211, name: 'Janusz'}, members: 4, area: 'igv'},
// ]

export default function*() {
  while (true) {
    yield take(GET_PROJECTS_ATTEMPT)
    const { pagination: { page, perPage }, searchValues } = yield select(({ Projects }) => Projects)
    const params = {
      ...searchValues,
      perPage,
      page: page || 0,
    }

    const url = `projects?with=team&${composeUrl(params)}`
    const body = { method: 'GET' }

    try {
      const { pagination, data } = yield call(request, url, body)
      console.log(data)
      yield put({
        type: GET_PROJECTS_SUCCESSFULLY,
        pagination,
        projects: data,
      })
    } catch (error) {
      yield put(sagaErrorNotification(GET_PROJECTS_FAILURE))
    }
  }
}
