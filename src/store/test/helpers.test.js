import React from 'react'
import * as helpers from '../helpers'

describe('helpers', () => {
  test('actionCreator', () => {
    const type = 'type';
    const prop = 'prop';
    const val = 'val';
    const result = helpers.actionCreator(type, prop)(val);

    const exceptedResult = {
      prop: 'val',
      type: 'type',
    };
    expect(result).toEqual(exceptedResult);
  }),
  test('actionCreator without prop and type', () => {
    const val = 'val';
    const result = helpers.actionCreator()(val);

    const exceptedResult = {
      undefined: undefined,
      type: undefined,
    };
    expect(result).toEqual(exceptedResult);
  }),
  test('actionPaginationCreator', () => {
    const type = 'type';
    const cb = jest.fn();
    const prop = 'pagination';
    const val = 'val';
    const dispatch = jest.fn();
    const result = helpers.actionPaginationCreator(type, cb, prop)(val)(dispatch);

    expect(dispatch).toHaveBeenCalled();
  }),
  test('actionChangeFilterCreator with attempt true as default', () => {
    const type = 'type';
    const cb = jest.fn();
    const key = 'key';
    const value = 'value';
    const dispatch = jest.fn();
    const result = helpers.actionChangeFilterCreator(type, cb)(key, value)(dispatch);

    expect(dispatch).toHaveBeenCalled();
  })
});
