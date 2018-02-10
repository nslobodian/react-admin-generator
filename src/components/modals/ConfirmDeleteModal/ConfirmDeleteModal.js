import React from 'react'
import connectModal from 'redux-modal/lib/connectModal'
import Modal from 'react-bootstrap/lib/Modal'
import withHandlers from 'recompose/withHandlers'

export const ConfirmDeleteModal = withHandlers({
  onDeleteHandler: ({ handleHide, handleDelete }) => () => {
    handleDelete()
    handleHide()
  },
})(({ show, handleHide, onDeleteHandler, item, deleteMessage }) =>
  <Modal
    show={show}
    onHide={handleHide}
  >
    <Modal.Header closeButton>
      <Modal.Title>Delete {item.toUpperCase()}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div>
        { deleteMessage || `Are you sure you want to delete this awesome ${item}?` }
      </div>
    </Modal.Body>
    <Modal.Footer>
      <button className='btn btn-default' onClick={handleHide}>Close</button>
      <button className='btn btn-danger' onClick={onDeleteHandler}>Delete</button>
    </Modal.Footer>
  </Modal>
  )

export default connectModal({ name: 'confirmDeleteModal', destroyOnHide: true })(ConfirmDeleteModal)
