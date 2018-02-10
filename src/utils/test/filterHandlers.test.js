import React from 'react'
import * as handlers from '../filterHandlers'

describe('filterHandlers', () => {
  test('dropDownHandler', () => {
    const filterChangeHandler = jest.fn()
    handlers.dropDownHandler('name')({ filterChangeHandler })('val')
    expect(filterChangeHandler).toHaveBeenCalled();
  }),
    test('textHandler', () => {
      const filterChangeHandler = jest.fn()
      handlers.textHandler('name')({ filterChangeHandler })({}, { value: 1 })
      expect(filterChangeHandler).toHaveBeenCalled();
    }),
    test('rangeHandler', () => {
      const filterChangeHandler = jest.fn()
      handlers.rangeHandler('name')({ filterChangeHandler })({ min: 1, max: 10 })
      expect(filterChangeHandler).toHaveBeenCalled();
    }),
    test('dateHandler', () => {
      const filterChangeHandler = jest.fn()
      handlers.dateHandler('name')({ filterChangeHandler })({}, { endDate: new Date(), startDate: new Date() })
      expect(filterChangeHandler).toHaveBeenCalled();
    }),
    test('multiSelectHandler', () => {
      const filterChangeHandler = jest.fn()
      const values = [
        {
          val: 'val',
        },
      ]
      handlers.multiSelectHandler('name', 1)({ filterChangeHandler })({}, values)
      expect(filterChangeHandler).toHaveBeenCalled();
    })
});

