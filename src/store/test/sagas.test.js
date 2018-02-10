import React from 'react'
import { injectSagas } from '../sagas'

describe('reducers', () => {
  test('injectSagas', () => {
    const store = {
      asyncSagas: ['sagas'],
      runSaga: jest.fn(),
    };
    const key = 'key';
    const sagas = '';

    const result = injectSagas(store, { key, sagas });
    const exceptedResult = undefined;
    expect(result).toEqual(exceptedResult);
  })
});
