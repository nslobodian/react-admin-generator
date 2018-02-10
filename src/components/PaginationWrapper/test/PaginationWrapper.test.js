import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import PaginationWrapper from '../PaginationWrapper'

const props = {};
const children = true;
const options = [{
  filter: jest.fn(),
}];

describe('(Components) PaginationWrapper', () => {
  it('Should render component properly', () => {
    const wrapper = mount(
      <PaginationWrapper
        {...props}
        children={children}
        options={options}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
