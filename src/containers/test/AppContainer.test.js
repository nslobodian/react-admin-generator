import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import AppContainer  from '../AppContainer'

describe('(Containers) AppContainer', () => {
  it('Should render component properly', () => {
    const props = {
      checkToken: jest.fn(),
      store: {
        getState: jest.fn(),
      },
      history: {
        getState: jest.fn(),
      },
      routes: {
        onChange: jest.fn(),
      },
      checkToken: jest.fn(),
    }
    const wrapper = shallow(
      <AppContainer
        {...props}
      />)
    wrapper.instance().shouldComponentUpdate()
  })
})
