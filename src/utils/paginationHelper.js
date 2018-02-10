import { put, select } from 'redux-saga/effects'
import { push } from 'react-router-redux/lib/actions'
import actions from 'redux-form/es/actions'
import moment from 'moment'

import { composeUrl } from 'utils/helpers'

export default function* (newUrl, pagination = {}, where = {}, formName) {
  const { pathname } = yield select(({ router }) => router.locationBeforeTransitions)
  if (pathname === newUrl) {
    yield put(push(`${newUrl}?${composeUrl({
      page: pagination.page,
      perPage: pagination.perPage,
      ...where,
    })}`))
    yield put(actions.initialize(formName, formatWhereOptions(where)))
  }
}

export const formatWhereOptions = (where = {}) => {
  const _options = {}
  Object.entries(where).forEach(([key, value]) => {
    let min = 'min'
    let max = 'max'
    let isDate = false
    if (key.includes('date')) {
      min = 'startDate'
      max = 'endDate'
      isDate = true
    }

    if (key.includes('From')) {
      const k = key.slice(0, -4)
      if (_options[k]) {
        _options[k][min] = isDate ? moment(value) : value
      } else {
        _options[k] = {
          [min]: isDate ? moment(value) : value,
        }
      }
    } else if (key.includes('To')) {
      const k = key.slice(0, -2)
      if (_options[k]) {
        _options[k][max] = isDate ? moment(value) : value
      } else {
        _options[k] = {
          [max]: isDate ? moment(value) : value,
        }
      }
    } else {
      _options[key] = value
    }
  })
  return _options
}
