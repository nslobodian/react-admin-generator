import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import RangeField from '../RangeField'

describe('(Components) RangeField', () => {
  it('Should render component properly and call toggleInputRange', () => {
    const props = {
      input: {
        name: 'name',
        value: {},
        onChange: jest.fn(),
      },
      disabled: true,
      maxValue: 2,
      minValue: 1,
      placeholder: 'placeholder',
    }
    const wrapper = shallow(
      <RangeField
        {...props}
      />)
    wrapper.instance().toggleInputRange()
  }),
  it('Should render component properly and call onChange', () => {
    const props = {
      input: {
        name: 'name',
        value: {},
        onChange: jest.fn(),
      },
      disabled: true,
      maxValue: 2,
      minValue: 1,
      placeholder: 'placeholder',
    }
    const min = 1;
    const max = 2;
    const wrapper = shallow(
      <RangeField
        {...props}
      />)
    wrapper.instance().onChange(min, max)
  }),
  it('Should render component properly and call saveValues', () => {
    const props = {
      input: {
        name: 'name',
        value: {
          max: 2,
        },
        onChange: jest.fn(),
      },
      disabled: true,
      maxValue: 2,
      minValue: 1,
      placeholder: 'placeholder',
    }
    const wrapper = shallow(
      <RangeField
        {...props}
      />)
    wrapper.instance().saveValues()
  }),
  it('Should render component properly and call saveValues', () => {
    const props = {
      input: {
        name: 'name',
        value: {
          max: 2,
        },
        onChange: jest.fn(),
      },
      disabled: true,
      maxValue: 2,
      minValue: 1,
      placeholder: 'placeholder',
    }
    const e = {
      preventDefault: jest.fn(),
    };
    const wrapper = shallow(
      <RangeField
        {...props}
      />)
    wrapper.instance().clearValues(e)
  })
})
