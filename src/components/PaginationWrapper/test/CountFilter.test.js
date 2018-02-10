import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import Component, { DropdownWrapper } from '../CountFilter'

const props = {};
  const options = [{
    filter: jest.fn(),
  }];
  const onChangeFilter = jest.fn();
  const perPage = jest.fn();
  const total = 1;
  const label = 'label';
  const short = true;

describe('(Components) CountFilter', () => {
  it('Should render DropdownWrapper properly', () => {
    const wrapper = mount(
      <DropdownWrapper
        {...props}
        onChangeFilter={onChangeFilter}
        options={options}
        perPage={perPage}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
  }),
  it('Should render Component properly', () => {
    const wrapper = mount(
      <Component
        {...props}
        onChangeFilter={onChangeFilter}
        total={total}
        perPage={perPage}
        label={label}
        short={short}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
