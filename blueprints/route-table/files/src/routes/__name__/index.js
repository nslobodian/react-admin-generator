import { injectReducer } from 'store/reducers'
import { injectSagas } from 'store/sagas'
import urls from 'utils/urls'

export default (store) => ({
  path: urls.<%= pascalEntityName.toLowerCase() %>, // /<%= dashesEntityName %>
  getComponent (nextState, cb) {
		import(/* webpackChunkName: "Route <%= pascalEntityName %>" */ './<%= pascalEntityName %>')
			.then(({<%= pascalEntityName %>Container, reducer, sagas}) => {
				injectSagas(store, {key: '<%= pascalEntityName %>', sagas })
				injectReducer(store, {key: '<%= pascalEntityName %>', reducer})

				cb(null, <%= pascalEntityName %>Container)
			})
  }
})
