import moment from 'moment'
import React from 'react'
import latinize from 'latinize'

export const composeUrl = data =>
  Object.keys(data).map(key => data.hasOwnProperty(key) && data[key] != null && data[key] !== ''
    ? key + '=' + data[key]
    : undefined)
      .filter(v => !!v).join('&')

export const convertDate = (date, short) => moment(date).format(`DD.MM.YYYY ${!short ? 'HH:mm' : ''}`)
export const today = moment()

export function * parseBlobToBase64 (blob) {
  return yield new Promise((resolve) => {
    const reader = new window.FileReader()
    reader.readAsDataURL(blob)
    reader.onloadend = () => {
      resolve({data: reader.result, type: blob.type})
    }
  })
}

export function leadingZeroes (num, places) {
  const zero = places - num.toString().length
  return '0'.repeat(zero >= 0 ? zero : 0) + num
}

export const times = (count, cb) => {
  const returnedValue = []
  for (let i = 0; i < count; i++) {
    returnedValue.push(cb(i))
  }
  return returnedValue
}

export const renderForLanguages = (data, countries) => <td>
  {
    countries.map(({language: {code}}) => <div key={code}><span>{data[code] || '-'}</span></div>)
  }
</td>

export const parseCategoriesToDropdown = categories => categories.map(category => ({ categoryId: category.categoryId, categoryName: category.name.en }))

export const transformText = text => {
  const _text = {}
  if (text) {
    Object.entries(text).forEach(([ln, val]) => {
      if (ln.length === 2) _text[ln] = val.value
    })
  }
  return _text
}

export const convertTranslationTexts = (text) => {
  const translations = {}
  Object.entries(text).forEach(([lng, val]) => {
    if (!translations[lng]) translations[lng] = {}
    translations[lng].value = val
  })
  return translations
}

/* eslint-disable no-useless-escape */
export const onlyNums = value => value && value.toString().replace(/[^\d*\.?\d*]/g, '')
/* eslint-enable */

export const getFriendlyUrl = value => latinize(value.trim()).replace(/[^a-zA-Z0-9 -]/g, '').replace(/ /g, '-').toLowerCase()
