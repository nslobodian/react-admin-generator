import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { BrowseProductButton } from '../BrowseProductButton'

const props = {
  input: {
    value: 1,
    onChange: jest.fn(),
  },
    meta: {
      touched: 'touched',
      invalid: 'invalid',
      error: 'error',
    },
    className: 'className',
    showProductsModal: jest.fn(),
    clearProduct: jest.fn(),
    saveProduct: jest.fn(),
    productUrl: 'productUrl',
    formName: 'formName',
}

describe('(Components) BrowseProductButton', () => {
  it('Should render component properly', () => {
    const wrapper = shallow(
      <BrowseProductButton
        {...props}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
    wrapper.instance().clearProductHandle()
  }),
  it('Should render component properly', () => {
    const productId = 1;
    const mainPictureUrl = 'mainPictureUrl';
    const productUrl = 'mainPictureUrl';
    const wrapper = shallow(
      <BrowseProductButton
        {...props}
      />)
    wrapper.instance().saveProductHandler(productId, mainPictureUrl, productUrl)
  })
})
