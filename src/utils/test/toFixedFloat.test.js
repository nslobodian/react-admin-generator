import React from 'react'
import * as func from '../toFixedFloat'

describe('toFixedFloat', () => {
  test('toFixedFloat without number', () => {
    const result = func.toFixedFloat()
    expect(result).toEqual(0);
  }),
  test('toFixedFloat with number', () => {
    const num = 1
    const fixed = false
    const result = func.toFixedFloat(num, fixed)
    expect(result).toEqual(1);
  })
});
