import React, { Component } from 'react'
import connect from 'react-redux/es/connect/connect'
import { show } from 'redux-modal/lib/actions'
import { getNotificationTagsAttempt } from 'redux/NotificationTag'
import TagsField from './TagsField'
import { injectSagas } from 'store/sagas'
import { getStore } from 'store/createStore'

export class CreateNewAudienceWrapper extends Component {
  componentWillMount () {
    this.props.getNotificationTagsAttempt()
  }

  componentDidMount () {
    import(/* webpackChunkName: 'Component Tags' */ './sagas')
      .then(({
        createNotificationTags,
        deleteNotificationTags,
        updateNotificationTags,
      }) => {
        injectSagas(getStore(), {
          key: 'CreateNotification',
          sagas: [
            createNotificationTags,
            deleteNotificationTags,
            updateNotificationTags,
          ],
        })
      })
  }

  render () {
    return <TagsField {...this.props} />
  }
}

const mapActionCreators = {
  getNotificationTagsAttempt,
  showManageTagsModal: () => show('mangeTagsModal'),
}

export default connect(({ NotificationTag: { notificationTags } }) => ({ notificationTags }), mapActionCreators)(CreateNewAudienceWrapper)

