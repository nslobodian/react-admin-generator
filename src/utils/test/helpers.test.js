import React from 'react'
import * as helpers from '../helpers'

describe('helpers', () => {
  test('renderForLanguages', () => {
    const data = '2016-03-12';
    const countries = {
      map: jest.fn(),
    };
    helpers.renderForLanguages(data, countries)
    expect(countries.map).toHaveBeenCalled();
  }),
  test('parseCategoriesToDropdown', () => {
    const categories = [
      {
        categoryId: 1,
        name: {
          en: 'enName',
        },
      },
    ]
    const result = helpers.parseCategoriesToDropdown(categories)

    const exceptedResult = [
      {
        categoryId: 1,
        categoryName: 'enName',
      },
    ]

    expect(result).toEqual(exceptedResult);
  }),
  test('transformText without text', () => {
    const result = helpers.transformText()
    expect(result).toEqual({});
  }),
  test('times without count', () => {
    const count = 0;
    const cb = jest.fn();
    const result = helpers.times(count, cb)

    const exceptedResult = [];

    expect(result).toEqual(exceptedResult);
  }),
  test('times with count', () => {
    const count = 1;
    const cb = jest.fn();
    const result = helpers.times(count, cb)

    const exceptedResult = [undefined];

    expect(result).toEqual(exceptedResult);
  }),
  test('leadingZeroes', () => {
    const num = 1;
    const places = 2;
    const result = helpers.leadingZeroes(num, places)

    const exceptedResult = '01';

    expect(result).toEqual(exceptedResult);
  }),
  test('leadingZeroes with zero < 0', () => {
    const num = 10;
    const places = 1;
    const result = helpers.leadingZeroes(num, places)

    const exceptedResult = '10';

    expect(result).toEqual(exceptedResult);
  }),
  test('composeUrl without data[key]', () => {
    const data = {
        hasOwnProperty: jest.fn(),
      };
    const result = helpers.composeUrl(data)

    expect(data.hasOwnProperty).toHaveBeenCalled();
  }),
  test('convertDate without time', () => {
    const date = '2016-03-12';
    const result = helpers.convertDate(date, true);

    const exceptedResult = '12.03.2016 ';

    expect(result).toEqual(exceptedResult);
  }),
  test('convertDate with time', () => {
    const date = '2016-03-12 13:00:00';
    const result = helpers.convertDate(date, false);

    const exceptedResult = '12.03.2016 13:00';

    expect(result).toEqual(exceptedResult);
  }),
  test('convertTranslationTexts without text', () => {
    const text = '';
    const result = helpers.convertTranslationTexts(text);

    const exceptedResult = {};

    expect(result).toEqual(exceptedResult);
  })
});
