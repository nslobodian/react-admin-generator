import mergeAll from 'ramda/src/mergeAll'

export const actionCreator = (type, prop) => val => ({
  type,
  [prop]: prop ? val : undefined,
})
export const actionPaginationCreator = (type, cb, prop = 'pagination') => (value, attempt = true) => dispatch => {
  dispatch({
    type,
    [prop]: value,
  })
  attempt && dispatch(cb())
}
export const actionChangeFilterCreator = (type, cb) => (key, value, attempt = true) => dispatch => {
  dispatch({
    type,
    searchValues: { [key]: value },
  })
  attempt && dispatch(cb())
}

export const actionSubmitCreator = type => values => dispatch => new Promise((resolve, reject) => {
  dispatch({
    type,
    resolve,
    reject,
    values,
  })
})

export const actionInitFiltersCreator = (type, cb) => (params = {}, attempt = true) => dispatch => {
  const { page, perPage, ...searchValues } = params
  dispatch({
    type: type,
    pagination: {
      page,
      perPage,
    },
    searchValues,
  })
  attempt && dispatch(cb())
}

const formatPaginationQuery = (params = {}) => {
  const { page, perPage } = params
  return ({
    page: page ? parseInt(page) : 1,
    perPage: perPage ? parseInt(perPage) : 20,
  })
}

export const reducerHelper = actions =>
  mergeAll(actions.map(action => {
    const parsedString = action.split('.')[1].split('_')
    const actionType = parsedString[parsedString.length - 1]
    const nameArray = parsedString.splice(0, parsedString.length - 1)

    const name = nameArray.map((word, index) => {
      const lowercase = word.toLowerCase()
      if (!index) {
        return lowercase
      }
      return lowercase.charAt(0).toUpperCase() + lowercase.slice(1)
    }).join('')
    const dataName = nameArray.length > 1 ? nameArray[1].toLowerCase() : ''

    switch (actionType) {
      case 'ATTEMPT':
        return {
          [action]: (state, { type, ...data }) => ({
            [`${name}Loading`]: true,
            ...data,
          }),
        }
      case 'SUCCESS':
        return {
          [action]: ({ [dataName]: { searchValues } }, { pagination, data }) => ({
            [`${name}Loading`]: false,
            [dataName]: {
              searchValues,
              pagination,
              data,
            },
          }),
        }
      case 'SUCCESSFULLY':
        return {
          [action]: (state, { type, ...data }) => ({
            [`${name}Loading`]: false,
            ...data,
          }),
        }
      case 'FAILURE':
        return {
          [action]: () => ({ [`${name}Loading`]: false }),
        }
      case 'PAGINATION':
        return {
          [action]: ({ [dataName]: { pagination, searchValues, ...data } }, action) => ({
            [dataName]: {
              ...data,
              searchValues,
              pagination: {
                ...pagination,
                ...action.pagination,
              },
            },
          }),
        }
      case 'PROPS':
        return {
          [action]: ({ pagination }, action) => ({
            pagination: {
              ...pagination,
              ...action.pagination,
            },
          }),
        }
      case 'FILTERS':
        return {
          [action]: ({ searchValues, pagination }, action) => ({
            searchValues: {
              ...searchValues,
              ...action.searchValues,
            },
            pagination: {
              ...pagination,
              ...formatPaginationQuery(action.pagination),
            },
          }),
        }
      case 'EMBEDFILTERS':
        return {
          [action]: ({ [dataName]: { pagination, searchValues, ...data } }, action) => ({
            [dataName]: {
              ...data,
              pagination: {
                ...pagination,
                ...formatPaginationQuery(action.pagination),
              },
              searchValues: {
                ...searchValues,
                ...action.searchValues,
              },
            },
          }),
        }
      case 'RESET':
        return {
          [action]: () => ({
            searchValues: {},
            pagination: {},
          }),
        }
      case 'EMBEDRESET':
        return {
          [action]: ({ [dataName]: { pagination, searchValues, ...data } }, action) => ({
            [dataName]: {
              ...data,
              searchValues: {},
              pagination: {},
            },
          }),
        }
      default:
        return { [action]: (state, { type, ...data }) => data }
    }
  }))
