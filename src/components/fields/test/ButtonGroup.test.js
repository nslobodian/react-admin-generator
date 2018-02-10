import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ButtonGroup from '../ButtonGroup'

describe('(Components) ButtonGroup', () => {
  it('Should render component properly', () => {
    const props = {
      input: {
        value: 1,
        onChange: jest.fn(),
      },
        meta: {
          submitFailed: jest.fn(),
          invalid: 'invalid',
          error: 'error',
        },
        options: [
          {
            label: 'label',
            value: 'label',
          },
        ],
        disabled: true,
    }

    const wrapper = shallow(
      <ButtonGroup
        {...props}
      />)
    wrapper.find('button').first().simulate('click')
  })
})
