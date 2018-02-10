import urls from 'utils/urls'

export default (store) => ({
  path: urls.login,
  getComponent (nextState, cb) {
    Promise.all([
      import('./containers/LoginContainer'),
    ]).then((modules) => {
      const Login = modules[0].default

      /*  Return getComponent   */
      cb(null, Login)
    })
  },
})
