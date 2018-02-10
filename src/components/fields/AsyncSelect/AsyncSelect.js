import React from 'react'
import pure from 'recompose/pure'
import { Async } from 'react-select'

export const AsyncSelect = pure(
  ({
     input: { value, onChange, onBlur, name }, meta: { touched, invalid, error },
     loadOptions, labelKey, valueKey,
  }) =>
    <div>
      <Async
        value={value}
        multi
        onChange={val => {
          onChange(val)
          onBlur(val)
        }}
        loadOptions={loadOptions}
        labelKey={labelKey}
        valueKey={valueKey}
      />
      {touched && invalid &&
      <div className='alert alert-danger m-t-1' role='alert'>{error}</div>}
    </div>
)

export default AsyncSelect
