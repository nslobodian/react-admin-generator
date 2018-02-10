import React from 'react'
import * as audience from '../audience'

describe('audience', () => {
  test('paginate', () => {
    const array = {
      slice: jest.fn()
    }
    const page = 5
    const perPage = 10
    audience.paginate(array, { page, perPage })
    expect(array.slice).toHaveBeenCalled();
  }),
    test('formatPaginate', () => {
      const page = 5
      const perPage = 10
      const totalCount = 15

      const result = audience.formatPaginate({ page, perPage }, totalCount)

      const exceptedResult = {
        page: 2,
        perPage,
        pages: parseInt(Math.ceil(totalCount / perPage), 10),
        totalCount,
      }
      expect(result).toEqual(exceptedResult);
    }),
    test('formatUsers', () => {
      const users = []
      const pagination = {
        page: 1,
        perPage: 10,
      }
      const modifyFn = jest.fn()

      const result = audience.formatUsers({ users, pagination }, modifyFn)

      const exceptedResult = {
        users: [],
        pagination: {
          page: 0,
          pages: 0,
          perPage: 10,
          totalCount: 0,
        },
        paginatedUsers: [],
      }
      expect(result).toEqual(exceptedResult);
    }),
    test('formatAttributes with incorrect values and reverse', () => {
      const values = ''
      const reverse = true
      const result = audience.formatAttributes(values, result)
      expect(result).toEqual({});
    }),
    test('formatAttributes with correct values and reverse (second option)', () => {
      const values = {
        0: {
          min: 1,
          max: 10,
        },
      }
      const reverse = false
      const result = audience.formatAttributes(values, reverse)

      const expectedResult = {
          0: {
            from: 1,
            to: 10,
          },
        }
      expect(result).toEqual(expectedResult);
    }),
    test('formatAttributes with correct values and reverse (first option)', () => {
      const values = {
        0: {
          from: 1,
          to: 10,
        },
      }
      const reverse = true
      const result = audience.formatAttributes(values, reverse)

      const expectedResult = {
        0: {
          min: 1,
          max: 10,
        },
      }
    expect(result).toEqual(expectedResult);
  }),
  test('formatAttributes with correct values and reverse (else option)', () => {
    const values = {
      0: 'value',
    }
    const reverse = false
    const result = audience.formatAttributes(values, result)

    const expectedResult = {
      0: 'value'
    }
    expect(result).toEqual(expectedResult);
  })
});

