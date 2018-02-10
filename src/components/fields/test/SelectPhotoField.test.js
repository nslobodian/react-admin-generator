import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import SelectPhotoField from '../SelectPhotoField'

describe('(Components) SelectPhotoField', () => {
  it('Should render component properly', () => {
    const props = {
      label: 'label',
      input: {
        onChange: jest.fn(),
        value: {
          preview: 'preview',
        },
      },
      meta: {
        touched: jest.fn(),
        invalid: jest.fn(),
        error: 'error!',
      },
      inline: true,
      showPreview: false,
    }
    const wrapper = shallow(
      <SelectPhotoField
        {...props}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
  }),
  it('Should render component properly without PreviewComponent', () => {
    const props = {
      label: 'label',
      input: {
        onChange: jest.fn(),
        value: false,
      },
      meta: {
        touched: jest.fn(),
        invalid: jest.fn(),
        error: 'error!',
      },
      inline: true,
      PreviewComponent: jest.fn(),
    }
    const wrapper = shallow(
      <SelectPhotoField
        {...props}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})

