import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ImgLazyLoad from '../ImgLazyLoad'

describe('(Components) ImgLazyLoad', () => {
  it('Should render component properly - with default properties', () => {
    const props = {};
    const wrapper = shallow(
      <ImgLazyLoad
        {...props}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
  }),
  it('Should render component properly - with given properties', () => {
    const props = {};
    const height = 10;
    const offset = 2;
    const wrapper = shallow(
      <ImgLazyLoad
        {...props}
        height={height}
        offset={offset}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})

