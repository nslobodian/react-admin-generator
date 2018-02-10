import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { EditTagNameField, ManageTagsModal } from '../ManageTagsModal'

describe('(Components) ManageTagsModal', () => {
  it('Should render component properly', () => {
    const props = {
      pagination: {
        page: 1,
        perPage: 10,
        totalCount: 1,
      },
      filterChangeHandler: jest.fn(),
      onPageChange: jest.fn(),
      updateTagName: jest.fn(),
      deleteTag: jest.fn(),
      notificationTags: [
        {
          name: 'name',
          notificationTagId: 1,
        },
      ],
      createNotificationTag: jest.fn(),
    }
    const wrapper = shallow(
      <ManageTagsModal
        {...props}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
  }),
  it('Without notificationTags', () => {
    const props = {
      pagination: {
        page: 1,
        perPage: 10,
      },
      filterChangeHandler: jest.fn(),
      onPageChange: jest.fn(),
      updateTagName: jest.fn(),
      deleteTag: jest.fn(),
      notificationTags: {},
      createNotificationTag: jest.fn(),
    }
    const wrapper = shallow(
      <ManageTagsModal
        {...props}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
  }),
  it('EditTagNameField', () => {
    const props = {
      name: 'name',
      notificationTagId: 1,
      deleteTag: jest.fn(),
      toggleStatus: jest.fn(),
      open: true,
      toggleStatus: jest.fn(),
      updateTagName: jest.fn(),
    }
    const wrapper = shallow(
      <EditTagNameField
        {...props}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
