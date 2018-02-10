import React from 'react'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import MovementIconField from '../MovementIconField'

describe('(Components) MovementIconField', () => {
  it('Should render component properly', () => {
    const props = {
      movementIcons: true,
      notifications: true,
    }
    const wrapper = shallow(
      <MovementIconField
        {...props}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('No notifications', () => {
    const props = {
      movementIcons: true,
      notifications: false,
      pictureUrl: 'pictureUrl',
      movementIconId: 1,
    }
    const wrapper = shallow(
      <MovementIconField
        {...props}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
