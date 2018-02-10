import React from 'react'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import InputFilterField from '../InputFilterField'

describe('(Components) InputFilterField', () => {
  const props = {
      input: {
        name: 'name',
        value: 1,
        onBlur: jest.fn(),
        onChange: jest.fn(),
      },
      handleChange: {
        setDebounce: {
          setTimeout: jest.fn(),
        },
        clearTimeout: jest.fn(),
        changeAttempt: jest.fn(),
      },
      className: 'className',
    }
  it('Should render component properly', () => {
    const wrapper = shallow(
      <InputFilterField
        {...props}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('Focus on input', () => {
    const wrapper = mount(
      <InputFilterField
        {...props}
      />)
    wrapper.find('input').simulate('focus')
  })
  it('Change on input', () => {
    const wrapper = mount(
      <InputFilterField
        {...props}
      />)
    wrapper.find('input').simulate('change')
  })
})
