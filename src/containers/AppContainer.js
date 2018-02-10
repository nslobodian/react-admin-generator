import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Router } from 'react-router'
import { connect, Provider } from 'react-redux'
import { Notifs } from 'redux-notifications'
import { checkToken } from 'redux/Auth'

@connect(null, { checkToken })
export class AppContainer extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
    checkToken: PropTypes.func,
  }

  componentWillMount () {
    this.props.checkToken()
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    const { history, routes, store } = this.props

    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
          <Router
            history={history}
            children={routes}
          />
          <Notifs />
        </div>
      </Provider>
    )
  }
}

export default AppContainer
