import React from 'react'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import { DeleteButtonWithConfirmation, mapActionCreators } from '../DeletButtonWithConfirmation'

describe('(Components) DeleteButtonWithConfirmation', () => {
  it('Should render DeleteButtonWithConfirmation properly', () => {
    const props = {
      onDelete: jest.fn(),
      deletingId: 1,
      showDeleteModal: jest.fn(),
      item: 'item',
      showDeleteModalHandler: jest.fn(),
      isButton: true,
    }
    const wrapper = mount(
      <DeleteButtonWithConfirmation
        {...props}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
  }),
  it('Should render DeleteButtonWithConfirmation properly without some attributes', () => {
    const props = {
      onDelete: jest.fn(),
      deletingId: 1,
      showDeleteModal: jest.fn(),
      item: 'item',
      showDeleteModalHandler: jest.fn(),
      isButton: false,
    }
    const wrapper = mount(
      <DeleteButtonWithConfirmation
        {...props}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
  }),
  it('Should render mapActionCreators', () => {
    const handleDelete = jest.fn();
    const item = 'item';
    const props = {
      showDeleteModal: jest.fn(),
      item: 'item',
      handleDelete: jest.fn(),
    }
    const wrapper = shallow(
      <mapActionCreators
        {...props}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
