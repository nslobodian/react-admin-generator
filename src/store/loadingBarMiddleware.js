import { showLoading, hideLoading } from 'react-redux-loading-bar'

const defaultTypeSuffixes = ['ATTEMPT', 'SUCCESS', 'SUCCESSFULLY', 'FAILURE']

export function loadingBarMiddleware (config = {}) {
  const promiseTypeSuffixes = config.promiseTypeSuffixes || defaultTypeSuffixes

  return ({ dispatch }) => next => (action) => {
    if (action.type) {
      const [ATTEMPT, SUCCESS, SUCCESSFULLY, FAILURE] = promiseTypeSuffixes

      const isPending = new RegExp(`${ATTEMPT}$`, 'g')
      const isFulfilled1 = new RegExp(`${SUCCESS}$`, 'g')
      const isFulfilled2 = new RegExp(`${SUCCESSFULLY}$`, 'g')
      const isRejected = new RegExp(`${FAILURE}$`, 'g')

      if (action.type.match(isPending)) {
        dispatch(showLoading())
      } else if (action.type.match(isFulfilled1) ||
                 action.type.match(isFulfilled2) ||
                 action.type.match(isRejected)) {
        dispatch(hideLoading())
      }
    }

    return next(action)
  }
}
