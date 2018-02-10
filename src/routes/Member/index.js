import { injectReducer } from 'store/reducers'
import { injectSagas } from 'store/sagas'
import urls from 'utils/urls'

export default (store) => ({
  path: `${urls.member}/:id`, // /member
  getComponent (nextState, cb) {
    import(/* webpackChunkName: "Route Member" */ './Member').then(({MemberContainer, reducer, getMember}) => {
      injectSagas(store, {key: 'Member', sagas: [getMember]})
      injectReducer(store, {key: 'Member', reducer})

      cb(null, MemberContainer)
    })
  },
})
