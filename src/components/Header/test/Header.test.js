import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { Header, CustomLi }from '../Header'

const props = {
  loggedIn: true,
  logout: jest.fn(),
  username: 'Username',
  toggleStatus: jest.fn(),
  collapse: true,
  resetCreatePurchaseOrder: jest.fn(),
}

describe('(Components) Header', () => {
  it('Should render component properly - default', () => {
    const wrapper = shallow(
      <Header
        {...props}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
  }),
  it('Should render component properly - default', () => {
    const active = true;
    const onSelect = jest.fn();
    const wrapper = shallow(
      <CustomLi
        {...props}
        active={active}
        onSelect={onSelect}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})

