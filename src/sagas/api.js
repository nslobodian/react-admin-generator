import fetch from 'isomorphic-fetch'
import config from 'config.json'
import { put } from 'redux-saga/effects'
import { removeToken } from 'redux/Auth'

// do NOT send Authorization header to urls
const allowedRequests = [
  {
    url: 'login',
    method: 'post',
  },
]

export const isAuthRequest = (url, method) =>
  allowedRequests.find(
    rq =>
      rq.method && rq.method !== method
        ? false
        : rq.url === url
  )

export const prepareRequestBody = (body, jsonRequest) => {
  if (jsonRequest) {
    return JSON.stringify(body)
  } else {
    let formDataBody = new FormData()
    Object.keys(body).forEach((key) => {
      if (Array.isArray(body[key])) {
        body[key].forEach(val => {
          formDataBody.append(`${key}`, val)
        })
      } else {
        formDataBody.append(key, body[key])
      }
    })

    return formDataBody
  }
}

export const prepareRequestHeaders = ({ headers = {}, method }, jsonRequest, url) => {
  const token = localStorage.getItem('token')

  if (token && !isAuthRequest(url, method)) {
    headers['Authorization'] = `Bearer ${token}`
  }

  if (jsonRequest) {
    headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...headers,
    }
  }

  return headers
}

export default function * (url, data, jsonRequest = true) {
  data.body = prepareRequestBody(data.body, jsonRequest)
  data.headers = prepareRequestHeaders(data, jsonRequest, url)

  const response = yield fetch(config.api.baseUrl + url, data)

  const responseBody = yield response.json()

  if (!response.ok) {
    if (response.status === 401 || response.status === 403) {
      yield put(removeToken())
    }
    throw responseBody
  }

  return responseBody
}
