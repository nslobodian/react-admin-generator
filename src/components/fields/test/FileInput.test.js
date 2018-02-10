import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import FileInput, { enhance } from '../FileInput'

describe('(Components) FileInput', () => {
  it('Should render component properly', () => {
    const props = {
      disabled : true,
      clearValue : jest.fn(),
      handleUploading : jest.fn(),
      uploaded : true,
      withPreview : true,
      input : {
        value: {
          preview: 'preview',
        },
      },
      meta : {
        submitFailed: jest.fn(),
        invalid: 'invalid',
        error: 'error',
      },
    };
    const wrapper = shallow(
      <FileInput
        {...props}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
