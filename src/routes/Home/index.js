import { injectReducer } from 'store/reducers'

export default (store) => ({
  getComponent (nextState, cb) {
    Promise.all([
      import('./containers/HomeContainer'),
      import('./modules/Home'),
    ]).then((modules) => {
      const Home = modules[0].default
      const reducer = modules[1].default

      injectReducer(store, { key: 'Home', reducer })

      cb(null, Home)
    })
  },
})
