import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { SelectProductModalWrapper } from '../AsyncComponent'

describe('(Components) AsyncComponent', () => {
  it('Should render component properly', () => {
    const props = {
      show: true,
      handleHide: jest.fn(),
      createNotificationTag,
      notificationTags: [
        {
          name: 'name',
          notificationTagId: 1,
        },
      ],
      getNotificationPagination: jest.fn(),
      pagination: {
        page: 1,
        perPage: 10,
        totalCount: 1,
      },
      deleteTag: true,
      changeNotificationTagsFilters: jest.fn(),
      createNotificationTag: jest.fn(),
      updateTagName: jest.fn(),
    };
    const tagId = 1;
    const createNotificationTag = jest.fn();
    const wrapper = shallow(
      <SelectProductModalWrapper
        {...props}
        createNotificationTag={createNotificationTag}
      />)
    wrapper.instance().updateTagNameHandler(tagId)()
  })
})
