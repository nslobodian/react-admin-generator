import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { ChangeTabField, TranslationField } from '../TranslationField'

describe('(Components) TranslationField', () => {
  it('Should render component properly', () => {
    const props = {
      children: [],
      input: {
        onChange: jest.fn(),
        value: 'sk',
      },
      countries: [
        {
          inde: 0,
          language: {
            code: 'abc',
            required: true,
          },
          currency: 'EUR',
        },
      ],
      needCode: true,
      innerWrap: true,
    }
    const wrapper = shallow(
      <ChangeTabField
        {...props}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('Should render component properly without some attribues', () => {
    const props = {
      children: [],
      input: {
        onChange: jest.fn(),
      },
      countries: [
        {
          inde: 0,
          language: {
            code: 'abc',
            required: false,
          },
          currency: 'EUR',
        },
      ],
      needCode: false,
      innerWrap: false,
    }
    const wrapper = shallow(
      <ChangeTabField
        {...props}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('Should render component properly without some attribues more', () => {
    const props = {
      children: [],
      input: {
        onChange: jest.fn(),
      },
      countries: [
        {
          inde: 0,
          language: {
            code: 'abc',
            required: false,
          },
          currency: 'EUR',
        },
      ],
      needCode: true,
      innerWrap: false,
    }
    const wrapper = shallow(
      <ChangeTabField
        {...props}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('Should render component properly without some attribues more more', () => {
    const props = {
      children: [],
      input: {
        onChange: jest.fn(),
      },
      countries: [
        {
          inde: 0,
          language: {
            code: 'abc',
            required: false,
          },
          currency: 'EUR',
        },
      ],
      needCode: false,
      innerWrap: true,
    }
    const wrapper = shallow(
      <ChangeTabField
        {...props}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('Should render TranslationField properly', () => {
    const props = {
      children: [],
      name: 'name',
      tabKey: '',
      countries: [
        {
          inde: 0,
          language: {
            code: 'abc',
            required: false,
          },
          currency: 'EUR',
        },
      ],
      needCode: false,
      innerWrap: true,
      getCountriesAttempt: jest.fn(),
    }
    const wrapper = shallow(
      <TranslationField
        {...props}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
  }),
  it('Should render TranslationField properly without some attributes', () => {
    const props = {
      children: [],
      countries: [
        {
          inde: 0,
          language: {
            code: 'abc',
            required: false,
          },
          currency: 'EUR',
        },
      ],
      innerWrap: true,
      getCountriesAttempt: jest.fn(),
    }
    const wrapper = shallow(
      <TranslationField
        {...props}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
