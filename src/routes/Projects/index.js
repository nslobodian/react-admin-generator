import { injectReducer } from 'store/reducers'
import { injectSagas } from 'store/sagas'
import urls from 'utils/urls'

export default (store) => ({
  path: urls.projects, // /projects
  getComponent (nextState, cb) {
    import(/* webpackChunkName: "Route Projects" */ './Projects').then(({ProjectsContainer, reducer, sagas}) => {
      injectSagas(store, {key: 'Projects', sagas })
      injectReducer(store, {key: 'Projects', reducer})

      cb(null, ProjectsContainer)
    })
  },
})
