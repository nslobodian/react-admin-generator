import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import DropdownElement from '../DropdownElement'

describe('(Components) DropdownElement', () => {
  it('Should render DropdownElement properly', () => {
    const props = {
      input: {
        value: 'value',
        onChange: jest.fn(),
        onBlur: jest.fn(),
        name: 'name',
      },
      meta: {
        touched: true,
        invalid: 'invalid',
        error: 'error',
      },
      label: 'label',
      forceShowErrors: jest.fn(),
      style: {},
    }
    const wrapper = mount(
      <DropdownElement
        {...props}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
  }),
  it('Should render DropdownElement properly without some attributes', () => {
    const props = {
      blurable: false,
      input: {
        value: 'value',
        onChange: jest.fn(),
        onBlur: jest.fn(),
        name: 'name',
      },
      meta: {
        touched: false,
        invalid: 'invalid',
        error: 'error',
      },
      multi: true,
      label: 'label',
      forceShowErrors: jest.fn(),
      style: {},
    }
    const wrapper = mount(
      <DropdownElement
        {...props}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
