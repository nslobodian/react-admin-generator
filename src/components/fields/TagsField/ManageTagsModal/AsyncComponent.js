import React, { Component } from 'react'
import PropTypes from 'prop-types'
import connectModal from 'redux-modal/lib/connectModal'
import connect from 'react-redux/es/connect/connect'
import {
  changeNotificationTagsFilters,
  createNotificationTag,
  deleteTag,
  getNotificationPagination,
  updateTagName,
} from 'redux/NotificationTag'
import Modal from 'react-bootstrap/lib/Modal'

export class SelectProductModalWrapper extends Component {
  constructor () {
    super()

    this.state = {
      AsyncComponent: null,
    }
  }

  static propTypes = {
    show: PropTypes.bool.isRequired,
    handleHide: PropTypes.func.isRequired,
  }

  componentDidMount () {
    require.ensure(
      [],
      require => this.setState({ AsyncComponent: require('./ManageTagsModal').default }),
      'ManageTagsModal'
    )
  }

  updateTagNameHandler = (tagId) => () => this.props.updateTagName(tagId)

  render () {
    const {
      show, handleHide, createNotificationTag, notificationTags,
      getNotificationPagination, pagination, deleteTag, changeNotificationTagsFilters,
    } = this.props
    const { AsyncComponent } = this.state
    const initialValues = {}
    notificationTags.forEach(({ name, notificationTagId }) => { initialValues[notificationTagId] = name })
    return (
      <Modal show={show}
        onHide={handleHide}
        bsSize='sm'
        className='onlyCloseButton'>
        <Modal.Header closeButton />
        <Modal.Body>
          {
            AsyncComponent &&
            <AsyncComponent
              createNotificationTag={createNotificationTag}
              notificationTags={notificationTags}
              initialValues={initialValues}
              deleteTag={deleteTag}
              updateTagName={this.updateTagNameHandler}
              onPageChange={getNotificationPagination}
              pagination={pagination}
              filterChangeHandler={changeNotificationTagsFilters}
            />
          }
        </Modal.Body>
      </Modal>
    )
  }
}

const mapActionCreators = {
  createNotificationTag,
  deleteTag,
  getNotificationPagination,
  updateTagName,
  changeNotificationTagsFilters,
}

export default connect(({ NotificationTag: { notificationTags, pagination } }) => ({
  notificationTags,
  pagination,
}), mapActionCreators)(
  connectModal({ name: 'mangeTagsModal', destroyOnHide: true })(SelectProductModalWrapper)
)
