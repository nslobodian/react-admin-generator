import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import CheckBoxField from '../CheckBoxField'

const props = {
      input: {
        value: 1,
        onChange: jest.fn(),
        name: 'inputName',
        onBlur: jest.fn(),
      },
        meta: {
          submitFailed: jest.fn(),
          invalid: 'invalid',
          error: 'error',
        },
        label: 'label',
        disabled: true,
    }

describe('(Components) CheckBoxField', () => {
  it('Should render component properly', () => {
    const wrapper = shallow(
      <CheckBoxField
        {...props}
      />)
    wrapper.find('input').first().simulate('change', {target: {checked: true}})
  })
})
