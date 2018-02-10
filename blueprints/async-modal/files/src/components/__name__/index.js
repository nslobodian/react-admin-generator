import React, { Component } from 'react'
import { connectModal } from 'redux-modal'
import { connect } from 'react-redux'
import Modal from 'react-bootstrap/lib/Modal'
import { reduxForm } from 'redux-form'
import { updateAttempt, deleteAttempt } from 'redux/StockProducts'

class <%= pascalEntityName %>Wrapper extends Component {
  constructor() {
    super()
    this.state = {
      AsyncComponent: false
    }
  }

  componentDidMount() {
    this.setState({ AsyncComponent: true })
  }

  renderAsyncComponent = () => {
    const <%= pascalEntityName %> = require('./<%= pascalEntityName %>').default
    const { show, handleHide, ...props } = this.props
    return <<%= pascalEntityName %> {...props}/>
  }

  render() {
    const { show, handleHide } = this.props
    const { AsyncComponent } = this.state
    return (
      <Modal show={show}
             onHide={handleHide}
             className='onlyCloseButton'
      >
        <Modal.Header closeButton/>
        <Modal.Body>
          <h3 className='text-center'><%= pascalEntityName %></h3>
          {
            AsyncComponent && this.renderAsyncComponent()
          }
        </Modal.Body>
      </Modal>
    )
  }
}

const mapActionCreators = { onSubmit: updateAttempt, deleteAttempt }

const validate = values => {
  const errors = {}

  if (!values.status) {
    errors.status = 'Required'
  }

  if (!values.note) {
    errors.note = 'Required'
  }

  return errors
}


export default connect(({ <%= pascalEntityName %>: { data } }) => ({ data }), mapActionCreators)(
connectModal({
  name: '<%= pascalEntityName %>Modal',
  destroyOnHide: true
})
(reduxForm({
  form: '<%= pascalEntityName %>Form',
  validate,
})(<%= pascalEntityName %>Wrapper))
)
