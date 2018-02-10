import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { AsyncSelect } from '../AsyncSelect'

const props = {
      input: {
        value: 1,
        onChange: jest.fn(),
        onBlur: jest.fn(),
        name: 'name',
      },
        meta: {
          touched: 'touched',
          invalid: 'invalid',
          error: 'error',
        },
        loadOptions: jest.fn(),
        labelKey: 'labelKey',
        valueKey: 'valueKey',
    }

describe('(Components) AsyncSelect', () => {
  it('Should render component properly', () => {
    const wrapper = shallow(
      <AsyncSelect
        {...props}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('Should render find and click button', () => {
    const wrapper = shallow(
      <AsyncSelect
        {...props}
      />)
    wrapper.find('Async').first().simulate('change', {target: {value: 'value'}})
  })
})
