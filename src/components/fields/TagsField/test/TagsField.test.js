import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import TagsField from '../TagsField'

describe('(Components) TagsField', () => {
  it('Should render component properly', () => {
    const props = {
      notificationTags: [],
      showManageTagsModal: jest.fn(),
    }
    const wrapper = shallow(
      <TagsField
        {...props}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
