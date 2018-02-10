import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { UsersTable } from '../UsersTable'

const props = {
  fields: [
    {
      value: 1,
      name: 'name',
    },
  ],
  users: [{
    username: 'Username',
    url: 'google.com',
    lastName: 'LastName',
    name: 'name',
    email: 'email@dot.com',
    userId: 1234,
  }],
  handleChangeFilter: jest.fn(),
  goToUserDetails: jest.fn(),
}

describe('(Route) UsersTable', () => {
  it('Should render component properly', () => {
    const wrapper = shallow(
      <UsersTable
        {...props}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('Component button click', () => {
    const wrapper = shallow(
      <UsersTable
        {...props}
      />)
    wrapper.find('button').simulate('click')
  })
})
