export const paginate = (array, { page, perPage }) => array.slice((page - 1) * perPage, page * perPage)
export const formatPaginate = ({ page, perPage }, totalCount) => {
  const totalPages = parseInt(Math.ceil(totalCount / perPage), 10)

  return {
    page: page > totalPages ? totalPages : page || 1,
    perPage,
    pages: totalPages,
    totalCount,
  }
}
export const formatUsers = ({ users, pagination }, modifyFn) => {
  const checkedUsers = modifyFn ? users.map(modifyFn) : users
  return {
    users: checkedUsers,
    pagination: formatPaginate(pagination, checkedUsers.length),
    paginatedUsers: paginate(checkedUsers, pagination),
  }
}

export const defaultPagination = {
  page: 1,
  perPage: 20,
  pages: 1,
  totalCount: 0,
}

export const formatAttributes = (values, reverse) => {
  let attributes = {}
  Object.entries(values).forEach(([key, value]) => {
    if (typeof value === 'object') {
      reverse
        ? attributes[key] =
        {
          min: value.from,
          max: value.to,
        }
        : attributes[key] =
        {
          from: value.min,
          to: value.max,
        }
    } else {
      attributes[key] = value
    }
  })
  return attributes
}
