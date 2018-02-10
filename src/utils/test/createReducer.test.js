import React from 'react'
import createReducer from '../createReducer'

describe('createReducer', () => {
  test('renderForLanguages', () => {
    const initialState = {};
    const handlers = [];
    const action = {};
    const x = jest.fn();
    const result = createReducer(initialState, handlers, x)(initialState, action)
    const expectedResult = {}
    expect(result).toEqual(expectedResult);
  })
});
