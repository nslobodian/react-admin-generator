import React from 'react'

export default ({ input: { value, onChange, name, onBlur }, meta: { submitFailed, invalid, error }, label, disabled }) => (
  <div className='checkbox'>
    <label>
      <input
        checked={value}
        onChange={e => {
          onChange(e.target.checked)
          onBlur(e.target.checked)
        }}
        type='checkbox'
        id={name}
        disabled={disabled}
      /> {label}
    </label>
    {submitFailed && invalid &&
    <div className='alert alert-danger m-t-1' role='alert'>{error.err || error}</div>}
  </div>
)
