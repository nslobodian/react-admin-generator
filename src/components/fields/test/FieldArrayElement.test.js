import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import FieldArrayElement from '../FieldArrayElement'

describe('(Components) FieldArrayElement', () => {
  it('Should render component properly', () => {
    const props = {
      name: 'name',
      index: 0,
      chooseComponent: jest.fn(),
      length: 5,
      swap: jest.fn(),
      remove: jest.fn(),
      field: {
        type: 'type',
        order: 'order',
      },
    }
    const wrapper = shallow(
      <FieldArrayElement
        {...props}
      />)
    wrapper.find('span').first().simulate('click')
  }),
  it('Should render component properly index isnt lower than length', () => {
    const props = {
      name: 'name',
      index: 1,
      chooseComponent: jest.fn(),
      length: 1,
      swap: jest.fn(),
      remove: jest.fn(),
      field: {
        type: 'type',
      },
    }
    const wrapper = shallow(
      <FieldArrayElement
        {...props}
      />)
    wrapper.find('span').first().simulate('click')
  }),
  it('Should render component properly index and length === 0', () => {
    const props = {
      name: 'name',
      index: 0,
      chooseComponent: jest.fn(),
      length: 0,
      swap: jest.fn(),
      remove: jest.fn(),
      field: {
        type: 'type',
      },
    }
    const wrapper = shallow(
      <FieldArrayElement
        {...props}
      />)
    wrapper.find('span').first().simulate('click')
  })
})
