import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import RangeDatePicker from '../RangeDatePicker'

describe('(Components) RangeDatePicker', () => {
  it('Should render component properly', () => {

    const props = {
      input: {
        onChange: jest.fn(),
        value: {
          startDate: {
            format: jest.fn(),
          },
          endDate: {
            format: jest.fn(),
          },
        },
        name: 'Name',
      },
      meta: {
        touched: true,
        invalid: true,
      },
      singleDatePicker: false,
      placeholder: 'Any time',
      customTrigger: false,
      customOnChange: jest.fn(),
    }
    const wrapper = mount(
      <RangeDatePicker
        {...props}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
    wrapper.find('FaClose').simulate('click')
  }),
  it('Should render component properly without singleDatePicker & placeholder & startDate', () => {

    const props = {
      input: {
        onChange: jest.fn(),
        value: {
          endDate: {
            format: jest.fn(),
          },
        },
        name: 'Name',
      },
      meta: {
        touched: true,
        invalid: true,
      },
      customTrigger: false,
      customOnChange: jest.fn(),
    }
    const wrapper = mount(
      <RangeDatePicker
        {...props}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
