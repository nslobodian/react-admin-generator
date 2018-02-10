import { errorNotification } from 'utils/notifications'
import CoreLayout from 'layouts/CoreLayout'
import { getRole } from 'utils/roles'
import urls from 'utils/urls'
import Home from './Home'
import Users from './Users'
import Member from './Member'
import Projects from './Projects'
import Teams from './Teams'
import Login from './Login'

const { users, login, page404, home } = urls
const getRoles = state => state.Auth.admin.roles
const notAuthPath = [page404, login, home]

export const replaceIfNotLoggedIn = ({ dispatch, getState }, pathname, replace) => {
  const token = localStorage.getItem('token')
  const roles = getRoles(getState())

  if (!token && pathname !== login) {
    dispatch(errorNotification('Please sign in'))
    replace(login)
  } else if (token && pathname === login) {
    replace(users)
  } else if (roles && !notAuthPath.includes(pathname) && !roles.includes(getRole(pathname))) {
    replace(page404)
  }
}

export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: Home(store),
  childRoutes: [
    Teams(store),
    Login(store),
    Users(store),
    Member(store),
    Projects(store),
    {
      path: '*',
      onEnter: (location, replace) => {
        replace('/')
      },
    },
  ],
  onEnter: ({ location: { pathname } }, replace) => {
    replaceIfNotLoggedIn(store, pathname, replace)
  },
  onChange: (prevState, { location: { pathname } }, replace) => {
    replaceIfNotLoggedIn(store, pathname, replace)
  },
})

export default createRoutes
