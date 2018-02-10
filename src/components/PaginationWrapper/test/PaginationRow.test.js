import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { DropdownWrapper, PaginationRow } from '../PaginationRow'

describe('(Components) PaginationRow', () => {
  it('Should render DropdownWrapper properly without dropdownConfig', () => {
    const options = [{
      filter: jest.fn(),
    }];
    const toggleChangeHandle = jest.fn();
    const value = 'value';
    const wrapper = shallow(
      <DropdownWrapper
        value={value}
        toggleChangeHandle={toggleChangeHandle}
        options={options}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
  }),
  it('Should render DropdownWrapper properly with dropdownConfig', () => {
    const options = [{
      labelKey: 'labelKey',
      valueKey: 'valueKey',
    }];
    const dropdownConfig = [{
      filter: jest.fn(),
    }];
    const toggleChangeHandle = jest.fn();
    const value = 'value';
    const wrapper = shallow(
      <DropdownWrapper
        value={value}
        toggleChangeHandle={toggleChangeHandle}
        options={options}
        dropdownConfig={dropdownConfig}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
  }),
  it('Should render PaginationRow properly', () => {
    const perPage = 10;
    const pages = 1;
    const page = 1;
    const handleChange = jest.fn();
    const totalCount = 1;
    const label = 'label';
    const toggleChangeHandle = jest.fn();
    const perUser = 1;
    const short = false;
    const dropdownValue = true;
    const options = [{
      labelKey: 'labelKey',
      valueKey: 'valueKey',
    }];
    const dropdownConfig = [{
      filter: jest.fn(),
    }];
    const wrapper = shallow(
      <PaginationRow
        perPage={perPage}
        pages={pages}
        page={page}
        handleChange={handleChange}
        totalCount={totalCount}
        label={label}
        options={options}
        toggleChangeHandle={toggleChangeHandle}
        perUser={perUser}
        short={short}
        dropdownValue={dropdownValue}
        dropdownConfig={dropdownConfig}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
  }),
  it('Should render PaginationRow properly with no options and short === false', () => {
    const perPage = 10;
    const pages = 1;
    const page = 1;
    const handleChange = jest.fn();
    const totalCount = 1;
    const label = 'label';
    const toggleChangeHandle = jest.fn();
    const perUser = true;
    const short = false;
    const dropdownValue = true;
    const options = false;
    const dropdownConfig = [{
      filter: jest.fn(),
    }];
    const wrapper = shallow(
      <PaginationRow
        perPage={perPage}
        pages={pages}
        page={page}
        handleChange={handleChange}
        totalCount={totalCount}
        label={label}
        options={options}
        toggleChangeHandle={toggleChangeHandle}
        perUser={perUser}
        short={short}
        dropdownValue={dropdownValue}
        dropdownConfig={dropdownConfig}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
  }),
  it('Should render PaginationRow properly with opposite values', () => {
    const perPage = 10;
    const pages = 1;
    const page = 1;
    const handleChange = jest.fn();
    const totalCount = 1;
    const label = 'label';
    const toggleChangeHandle = jest.fn();
    const perUser = 1;
    const short = true;
    const dropdownValue = true;
    const options = false;
    const dropdownConfig = [{
      filter: jest.fn(),
    }];
    const wrapper = shallow(
      <PaginationRow
        perPage={perPage}
        pages={pages}
        page={page}
        handleChange={handleChange}
        totalCount={totalCount}
        label={label}
        options={options}
        toggleChangeHandle={toggleChangeHandle}
        perUser={perUser}
        short={short}
        dropdownValue={dropdownValue}
        dropdownConfig={dropdownConfig}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
