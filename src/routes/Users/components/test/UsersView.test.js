import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import UsersView from '../UsersView'

const props = {
  handleChangeFilter: jest.fn(),
  getUsersPagination: jest.fn(),
  goToUserDetails: jest.fn(),
  getUsersLoading: jest.fn(),
  pagination: {
    'page': 1,
    'pages': 1,
    'perPage': 10,
    'totalCount': 5,
  },
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
  resetFilters: jest.fn(),
  getUsersAttempt: jest.fn(),
}

describe('(Route) UsersView', () => {
  it('Should render component properly and unmount', () => {
    const wrapper = shallow(
      <UsersView
        {...props}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
    wrapper.unmount()
  }),
  it('Should render component properly and unmount', () => {
    const wrapper = shallow(
      <UsersView
        {...props}
      />)
    wrapper.instance().componentDidMount()
  })
})
