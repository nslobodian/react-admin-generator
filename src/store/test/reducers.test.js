import React from 'react'
import { injectReducer } from '../reducers'

describe('reducers', () => {
  test('injectReducer', () => {
    const store = {
      asyncReducers: ['reducer'],
      replaceReducer: jest.fn(),
    };
    const key = 'key';
    const reducer = '';

    const result = injectReducer(store, { key, reducer });
    const exceptedResult = undefined;
    expect(result).toEqual(exceptedResult);
  })
});
