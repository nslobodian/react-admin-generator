import React from 'react'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import { ConfirmDeleteModal } from '../ConfirmDeleteModal'

const props = {
  handleHide: jest.fn(),
  handleDelete: jest.fn(),
  show: true,
  item: 'item',
}

describe('(Components) ConfirmDeleteModal', () => {
  it('Should render component properly', () => {
    const wrapper = shallow(
      <ConfirmDeleteModal
        {...props}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
