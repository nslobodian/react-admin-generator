import React from 'react'
import FaClose from 'react-icons/lib/fa/close'
import { show } from 'redux-modal/lib/actions'
import withHandlers from 'recompose/withHandlers'
import connect from 'react-redux/lib/connect/connect'

export const DeleteButtonWithConfirmation = withHandlers({
  showDeleteModalHandler: ({ onDelete, deletingId, showDeleteModal, item, deleteMessage }) => () => {
    showDeleteModal(() => onDelete(deletingId), item, deleteMessage)
  },
})(({ showDeleteModalHandler, isButton, className }) =>
  <div onClick={showDeleteModalHandler}>
    {isButton
      ? <button className={`btn btn-sm btn-danger ${className}`}>Delete</button>
      : <span><FaClose className='CloseButton' /></span>
    }
  </div>
)

export const mapActionCreators = {
  showDeleteModal: (handleDelete, item, deleteMessage) => show('confirmDeleteModal', { handleDelete, item, deleteMessage }),
}

export default connect(() => ({}), mapActionCreators)(DeleteButtonWithConfirmation)
