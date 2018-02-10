import React from 'react'
import * as handlers from '../onChangeFilterHandlers'

describe('onChangeFilterHandlers', () => {
  test('dropDownHandler', () => {
    const spy = jest.fn()
    handlers.dropDownHandler(spy, 'name', 'value')('value')
      expect(spy).toHaveBeenCalled();
  }),
  test('textHandler', () => {
    const spy = jest.fn()
    handlers.textHandler(spy, 'name')({}, { value: 1 })
      expect(spy).toHaveBeenCalled();
  }),
  test('rangeHandler', () => {
    const spy = jest.fn()
    handlers.rangeHandler(spy, 'name')({ min: 1, max: 10 })
      expect(spy).toHaveBeenCalled();
  }),
  test('dropDownHandler', () => {
    const spy = jest.fn()
    handlers.dateHandler(spy, 'name')({}, { endDate: new Date(), startDate: new Date() })
      expect(spy).toHaveBeenCalled();
  }),
  test('multiSelectHandler', () => {
    const values = [
      {
        id: 1,
      }
    ]
    const spy = jest.fn()
    handlers.multiSelectHandler(spy, 'name', 1)({}, values)
      expect(spy).toHaveBeenCalled();
  })
});

