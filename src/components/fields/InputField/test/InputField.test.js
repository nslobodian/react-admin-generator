import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { InputField } from '../InputField'

describe('(Components) InputField', () => {
  it('Should render component properly', () => {
    const props = {
      input: {
        value: 1,
        onChange: jest.fn(),
      },
      meta: {
        asyncValidating: jest.fn(),
        submitFailed: 'submitFailed',
        touched: 'touched',
      },
      forceShowErrors: jest.fn(),
      textarea: true,
      className: 'className',
      label: 'label',
    }
    const wrapper = shallow(
      <InputField
        {...props}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('Should render component properly without textarea', () => {
    const props = {
      input: {
        value: 1,
        onChange: jest.fn(),
      },
      meta: {
        asyncValidating: jest.fn(),
        touched: 'touched',
      },
      forceShowErrors: jest.fn(),
      textarea: false,
      label: 'label',
    }
    const wrapper = shallow(
      <InputField
        {...props}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('Should render component properly testing with error', () => {
    const props = {
      input: {
        value: 1,
        onChange: jest.fn(),
      },
      meta: {
        touched: 'touched',
        error: 'error',
      },
      textarea: false,
      label: 'label',
    }
    const wrapper = shallow(
      <InputField
        {...props}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
