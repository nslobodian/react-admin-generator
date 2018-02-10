import React from 'react'
import componentGenerator, { renderForLanguages } from '../componentGenerators'

describe('componentGenerators', () => {
  test('renderForLanguages', () => {
    const data = '2016-03-12';
    const countries = {
      map: jest.fn(),
    };
    const result = renderForLanguages(data, countries)
    const expectedResult = {}
    expect(result).toMatchObject(expectedResult);
  })
});
