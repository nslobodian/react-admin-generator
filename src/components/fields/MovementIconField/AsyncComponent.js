import React, { Component } from 'react'
import connect from 'react-redux/lib/connect/connect'
import { getMovementIconsAttempt } from 'redux/NotificationTag'
import MovementIconField from './MovementIconField'
import { injectSagas } from 'store/sagas'
import { getStore } from 'store/createStore'

export class CreateNewAudienceWrapper extends Component {
  componentDidMount () {
    import(/* webpackChunkName: 'Component MovementIconField' */ './getUserMovementsIcons')
      .then(({ getUserMovementsIcons }) => {
        injectSagas(getStore(), { key: 'ComponentMovementIconField', sagas: [getUserMovementsIcons] })
        this.props.getMovementIconsAttempt(this.props.notifications)
      })
  }

  render () {
    return <MovementIconField {...this.props} />
  }
}

const mapActionCreators = { getMovementIconsAttempt }

export default connect(({ NotificationTag: { movementIcons } }) => ({ movementIcons }), mapActionCreators)(CreateNewAudienceWrapper)

