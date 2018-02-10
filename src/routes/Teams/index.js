import { injectReducer } from 'store/reducers'
import { injectSagas } from 'store/sagas'
import urls from 'utils/urls'

export default (store) => ({
  path: urls.teams, // /teams
  getComponent (nextState, cb) {
		import(/* webpackChunkName: "Route Teams" */ './Teams')
			.then(({TeamsContainer, reducer, sagas}) => {
				injectSagas(store, {key: 'Teams', sagas })
				injectReducer(store, {key: 'Teams', reducer})

				cb(null, TeamsContainer)
			})
  }
})
