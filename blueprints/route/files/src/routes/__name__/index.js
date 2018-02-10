import { injectReducer } from 'store/reducers'
import { injectSagas } from 'store/sagas'
import urls from 'utils/urls'

export default (store) => ({
  path: urls.<%= pascalEntityName %>, // /<%= dashesEntityName %>
  getComponent (nextState, cb) {
		import(/* webpackChunkName: "Route <%= pascalEntityName %>" */ './<%= pascalEntityName %>')
			.then(({<%= pascalEntityName %>Container, reducer, get<%= pascalEntityName %>}) => {
				injectSagas(store, {key: '<%= pascalEntityName %>', sagas: [ get<%= pascalEntityName %> ]})
				injectReducer(store, {key: '<%= pascalEntityName %>', reducer})

				cb(null, <%= pascalEntityName %>Container)
			})
  }
})
