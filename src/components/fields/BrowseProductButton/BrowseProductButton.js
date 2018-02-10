import React, { Component } from 'react'
import s from './BrowseProductButton.scss'
import connect from 'react-redux/es/connect/connect'
import { show } from 'redux-modal/lib/actions'
import cn from 'classnames'
import SelectProductModal from '../../modals/SelectProductModal'
import { clearProduct, saveProduct } from 'redux/Products'

export class BrowseProductButton extends Component {
  clearProductHandle = () => {
    this.props.input.onChange(null)
    this.props.clearProduct(this.props.formName)
  }

  saveProductHandler = ({ productId, mainPictureUrl, productUrl }) => {
    const { saveProduct, input: { onChange }, formName } = this.props
    onChange({ productId, photo: mainPictureUrl })
    saveProduct(formName, productUrl)
  }

  render () {
    const { showProductsModal, className, input: { value }, meta: { touched, invalid, error } } = this.props
    return <div>
      <div className={s.photoTwoButtonsWrapper}>
        <button type='button' className={cn('btn btn-primary', className)} onClick={showProductsModal}>
          Browse
        </button>
        {
          value &&
          <button type='button' className={cn('btn btn-danger', className)} onClick={this.clearProductHandle}>
            Delete</button>
        }
        <SelectProductModal saveProduct={this.saveProductHandler} />
      </div>
      { touched && invalid &&
      <div className='alert alert-danger m-t-1' role='alert'>{error}</div>}
    </div>
  }
}

const mapActionCreators = {
  showProductsModal: () => show('SelectProductModal'),
  clearProduct,
  saveProduct,
}

export default connect(() => ({}), mapActionCreators)(BrowseProductButton)
