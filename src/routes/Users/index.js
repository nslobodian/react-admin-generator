import urls from 'utils/urls'

export default (store) => ({
  path: urls.members,
  getComponent (nextState, cb) {
    import(/* webpackChunkName: 'Route Users' */ './Users')
      .then(({ UsersContainer }) => {
        cb(null, UsersContainer)
      })
  },
})
