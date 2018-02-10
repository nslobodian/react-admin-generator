import React from 'react'
import PropTypes from 'prop-types'
import LoadingBar from 'react-redux-loading-bar'
import Header from 'containers/HeaderContainer'
import 'styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div>
    <Header />
    <LoadingBar className='loadingBar' />
    <div className='col-xs-12'>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default CoreLayout
