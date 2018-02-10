import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Spinner from '../Spinner'

describe('(Components) Spinner', () => {
  it('Should render component properly', () => {
    const wrapper = shallow(
      <Spinner />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
