import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { Home } from '../Home'

describe('(Routes) Home', () => {
  it('Should render Home properly', () => {
  const props = {}
    const wrapper = shallow(
      <Home
        {...props}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
