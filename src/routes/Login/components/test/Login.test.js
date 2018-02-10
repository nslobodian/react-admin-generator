import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { LoginForm } from '../Login'

describe('(Routes) Login', () => {
  it('Should render LoginForm properly', () => {
  const props = {
    handleSubmit: jest.fn(),
    valid: true,
    submitFailed: true,
    submitting: jest.fn(),
  }
    const wrapper = shallow(
      <LoginForm
        {...props}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
