import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Dropdown from '../Dropdown'

describe('(Components) Dropdown', () => {
  it('Should render Dropdown properly', () => {
    const props = {
      children: [],
      dropdown: true,
      toggleDropdown: jest.fn(),
      title: 'title',
      type: 'TYPE',
      noHideOnSelect: true,
    }
    const wrapper = shallow(
      <Dropdown
        {...props}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
    wrapper.find('ul').simulate('click')
    wrapper.find('button').simulate('click')
  }),
  it('Should render Dropdown properly without some attributes', () => {
    const props = {
      children: [],
      toggleDropdown: jest.fn(),
      title: 'title',
      type: 'TYPE',
      noHideOnSelect: false,
    }
    const wrapper = shallow(
      <Dropdown
        {...props}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
    wrapper.find('ul').simulate('click')
    wrapper.find('button').simulate('click')
  })
})
