import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import CoreLayout from '../CoreLayout'

describe('(Layout) CoreLayout', () => {
  it('Should render CoreLayout properly', () => {
    const props = {
      children: [],
    }
    const wrapper = shallow(
      <CoreLayout
        {...props}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
